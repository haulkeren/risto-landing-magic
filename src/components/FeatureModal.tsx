import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FeatureModal = ({ isOpen, onClose, featureCategories }) => {
  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal - Fixed positioning and sizing issues */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Container - Improved sizing and scrolling */}
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h3 className="font-bold text-xl text-gray-900">Semua Fitur Aplikasi</h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Modal Content - Always shows all categories (removed tabs) */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 gap-8">
                  {featureCategories.map((category) => (
                    <div key={category.id} className="space-y-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                          <category.icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-800">{category.title}</h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.features.map((feature, index) => (
                          <div
                            key={index}
                            className={`relative rounded-xl overflow-hidden transition-all duration-300 group ${
                              feature.highlight
                                ? "bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                                : "bg-white border border-gray-100 hover:border-primary/20"
                            }`}
                          >
                            {feature.highlight && (
                              <div className="absolute top-0 right-0">
                                <div className="bg-primary text-white text-xs py-1 px-3 rounded-bl-lg font-medium">
                                  Unggulan
                                </div>
                              </div>
                            )}

                            <div className="p-5 flex flex-col h-full">
                              <div
                                className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 ${
                                  feature.highlight
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 text-primary group-hover:bg-primary/10 transition-colors duration-300"
                                }`}
                              >
                                <feature.icon className="h-5 w-5" />
                              </div>

                              <h5 className="font-semibold text-lg text-gray-900 mb-2">
                                {feature.title}
                              </h5>

                              <p className="text-gray-600 text-sm flex-grow">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-end">
                  <button
                    onClick={onClose}
                    className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FeatureModal;