"use client";

import { useState, useEffect } from "react";
import {
  X,
  ChevronRight,
  Heart,
  Package,
  Truck,
  GraduationCap,
  Stethoscope,
  Baby,
  User,
  Flag
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { SITE_URLS } from "../../config/site-urls";

interface HelpMeChooseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type StepID = 'ROOT' | 'CARE_TYPE' | 'WHO_FOR' | 'EQUIPMENT_TYPE' | 'TRAINING_TYPE';

interface Option {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  nextStep?: StepID;
  action?: () => void;
}

export const HelpMeChooseModal = ({ isOpen, onClose }: HelpMeChooseModalProps) => {
  const [currentStep, setCurrentStep] = useState<StepID>('ROOT');
  const [history, setHistory] = useState<StepID[]>([]);
  
  // Track selections for final navigation
  const [selections, setSelections] = useState<{
    service: string;
    type?: string;
    subType?: string;
  }>({ service: "" });

  useEffect(() => {
    const handleOpenModal = (e: any) => {
      const { initialStep, selections: initialSelections } = e.detail || {};
      if (initialStep) setCurrentStep(initialStep);
      if (initialSelections) setSelections(initialSelections);
      setHistory([]); // Reset history when opened externally
    };
    window.addEventListener('open-help-modal', handleOpenModal as EventListener);
    return () => window.removeEventListener('open-help-modal', handleOpenModal as EventListener);
  }, []);

  const goToStep = (step: StepID) => {
    setHistory((prev) => [...prev, currentStep]);
    setCurrentStep(step);
  };

  const goBack = () => {
    const newHistory = [...history];
    const prevStep = newHistory.pop();
    if (prevStep) {
      setHistory(newHistory);
      setCurrentStep(prevStep);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset after closing animation
    setTimeout(() => {
      setCurrentStep('ROOT');
      setHistory([]);
      setSelections({ service: "" });
    }, 300);
  };

  const finalize = () => {
    const { service, subType } = selections;
    let url = "";

    if (service === "care") {
      switch (subType) {
        case "homehealth": url = `${SITE_URLS.services}/homehealth`; break;
        case "privateduty-nursing": url = `${SITE_URLS.services}/privateduty-nursing`; break;
        case "home-care": url = `${SITE_URLS.services}/home-care`; break;
        case "veterans-care": url = `${SITE_URLS.services}/veterans-care`; break;
        default: url = SITE_URLS.services;
      }
    } else if (service === "equipment") {
      switch (subType) {
        case "dme": url = SITE_URLS.ecommerce; break;
        case "catalog": url = SITE_URLS.ecommerce; break;
        case "scrubs": url = SITE_URLS.ecommerce; break;
        default: url = SITE_URLS.ecommerce;
      }
    }

    if (url) {
      window.location.href = url;
    } else {
      handleClose();
    }
  };

  const selectService = (service: string, nextStep: StepID) => {
    setSelections({ service });
    goToStep(nextStep);
  };

  const selectCareSubType = (subType: string) => {
    setSelections((prev) => ({ ...prev, subType }));
    goToStep('WHO_FOR');
  };

  const goToEquipment = () => {
    window.location.href = SITE_URLS.ecommerce;
  };

  const handleOptionClick = (option: Option) => {
    if (option.nextStep) {
      goToStep(option.nextStep);
      return;
    }

    if (option.action) {
      option.action();
      return;
    }

    handleClose();
  };

  const steps: Record<StepID | 'EQUIPMENT_TYPE' | 'TRAINING_TYPE', { title: string; subtitle: string; options: Option[] }> = {
    ROOT: {
      title: "What are you looking for?",
      subtitle: "Select the service that best matches your needs.",
      options: [
        {
          id: "care",
          title: "Care",
          description: "Nursing, Therapy, Home Health",
          icon: <Heart className="w-5 h-5" />,
          action: () => selectService("care", 'CARE_TYPE'),
        },
        {
          id: "equipment",
          title: "Equipment / Supplies",
          description: "DME, Oxygen, Supplies",
          icon: <Package className="w-5 h-5" />,
          action: () => selectService("equipment", 'EQUIPMENT_TYPE'),
        },
        {
          id: "transportation",
          title: "Transportation",
          description: "Non-Emergency Transport",
          icon: <Truck className="w-5 h-5" />,
          action: () => {
            window.location.href = SITE_URLS.transport;
          },
        },
        {
          id: "training",
          title: "Training / Careers",
          description: "CNA, Phlebotomy, Jobs",
          icon: <GraduationCap className="w-5 h-5" />,
          action: () => selectService("training", 'TRAINING_TYPE'),
        },
      ],
    },
    CARE_TYPE: {
      title: "Type of Care Needed",
      subtitle: "This helps us route you to the right department.",
      options: [
        {
          id: "homehealth",
          title: "Home Health (Medicare)",
          description: "Recovery after surgery or illness",
          icon: <Stethoscope className="w-5 h-5" />,
          action: () => selectCareSubType("homehealth"),
        },
        {
          id: "privateduty-nursing",
          title: "Private Duty Nursing",
          description: "Long-term complex care",
          icon: <Baby className="w-5 h-5" />,
          action: () => selectCareSubType("privateduty-nursing"),
        },
        {
          id: "home-care",
          title: "Personal Home Care",
          description: "Daily help (non-medical)",
          icon: <User className="w-5 h-5" />,
          action: () => selectCareSubType("home-care"),
        },
        {
          id: "veterans-care",
          title: "Veterans Care",
          description: "VA authorized services",
          icon: <Flag className="w-5 h-5" />,
          action: () => selectCareSubType("veterans-care"),
        },
      ],
    },
    EQUIPMENT_TYPE: {
      title: "Equipment Category",
      subtitle: "What type of supplies are you looking for?",
      options: [
        {
          id: "dme",
          title: "DME Equipment",
          description: "Durable medical equipment",
          icon: <Package className="w-5 h-5" />,
          action: goToEquipment,
        },
        {
          id: "catalog",
          title: "Browse Catalog",
          description: "View all medical supplies",
          icon: <Package className="w-5 h-5" />,
          action: goToEquipment,
        },
        {
          id: "scrubs",
          title: "Scrubs",
          description: "Professional medical apparel",
          icon: <Package className="w-5 h-5" />,
          action: goToEquipment,
        },
      ],
    },
    TRAINING_TYPE: {
      title: "Programs & Careers",
      subtitle: "Select a program to learn more or apply.",
      options: [
        {
          id: "cna",
          title: "CNA Program",
          description: "Certified Nursing Assistant training",
          icon: <GraduationCap className="w-5 h-5" />,
          action: () => window.location.href = SITE_URLS.institute,
        },
        {
          id: "phlebotomy",
          title: "Phlebotomy Training",
          description: "Blood draw certification program",
          icon: <GraduationCap className="w-5 h-5" />,
          action: () => window.location.href = SITE_URLS.institute,
        },
        {
          id: "cpr",
          title: "CPR Certification",
          description: "CPR & First Aid training",
          icon: <GraduationCap className="w-5 h-5" />,
          action: () => window.location.href = SITE_URLS.institute,
        },
      ],
    },
    WHO_FOR: {
      title: "Who is this for?",
      subtitle: "This helps us customize your experience.",
      options: [
        {
          id: "myself",
          title: "Myself",
          action: finalize,
        },
        {
          id: "family",
          title: "Family member",
          action: finalize,
        },
        {
          id: "organization",
          title: "Patient / Organization",
          action: finalize,
        },
      ],
    },
  };

  const currentStepData = steps[currentStep];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#0E1B33]/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-[500px] overflow-hidden rounded-[24px] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10"
          >
            {/* Header */}
            <div className="mb-8 flex items-start justify-between">
              <div className="pr-8">
                <h2 className="text-[28px] font-black leading-tight text-[#0E1B33] sm:text-[32px]">
                  {currentStepData.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-[#6A6A67]">
                  {currentStepData.subtitle}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#6A6A67] hover:bg-[#F3F4F6] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Step Content */}
            <div className="space-y-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  {currentStepData.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionClick(option)}
                      className="group relative flex w-full items-center gap-4 rounded-[20px] border border-[#edf0f4] bg-white p-4 text-left transition-all hover:border-[#20A9AD] hover:bg-[#F7FAFA] hover:shadow-[0_8px_30px_rgba(32,169,173,0.1)] active:scale-[0.99]"
                    >
                      {option.icon && (
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#f3f4f6] text-[#6A6A67] transition-colors group-hover:bg-[#eef8f8] group-hover:text-[#20A9AD]">
                          {option.icon}
                        </div>
                      )}
                      <div className="flex-1 pr-6">
                        <div className="text-[17px] font-bold text-[#0E1B33]">
                          {option.title}
                        </div>
                        {option.description && (
                          <div className="mt-0.5 text-[14px] leading-tight text-[#6A6A67]">
                            {option.description}
                          </div>
                        )}
                      </div>
                      <ChevronRight className="absolute right-6 h-5 w-5 text-[#D1D5DB] transition-transform group-hover:translate-x-1 group-hover:text-[#20A9AD]" />
                    </button>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer / Back Button */}
            {history.length > 0 && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 text-[15px] font-bold text-[#0E1B33] hover:opacity-70 transition-opacity"
                >
                  Back
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
