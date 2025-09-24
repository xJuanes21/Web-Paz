'use client'
import React, { useState } from 'react';
import {
    ChevronRight,
    ChevronLeft,
    User,
    FileText,
    Send,
    CheckCircle,
    AlertCircle,
    MessageSquare,
    ThumbsUp,
    Phone,
    Mail,
    MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
    tipo: string;
    nombre: string;
    telefono: string;
    email: string;
    direccion: string;
    descripcion: string;
    fechaRecepcion: string;
    medioRecepcion: string;
    responsable: string;
}

const PQRSForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        tipo: '',
        nombre: '',
        telefono: '',
        email: '',
        direccion: '',
        descripcion: '',
        fechaRecepcion: new Date().toISOString().split('T')[0],
        medioRecepcion: 'WEB',
        responsable: ''
    });

    // Animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -100 : 100,
            opacity: 0,
            transition: {
                duration: 0.3
            }
        })
    };

    const [slideDirection, setSlideDirection] = useState(0);

    // Datos constantes
    const tiposPQRS = [
        {
            id: 'PETICION',
            nombre: 'PETICIÓN',
            icon: FileText,
            color: '#561A16',
            lightColor: '#F5F0ED',
            descripcion: 'Solicitud de información, documentos o servicios'
        },
        {
            id: 'QUEJA',
            nombre: 'QUEJA',
            icon: AlertCircle,
            color: '#ED6C02',
            lightColor: '#FEF7E0',
            descripcion: 'Manifestación de insatisfacción con el servicio'
        },
        {
            id: 'RECLAMO',
            nombre: 'RECLAMO',
            icon: MessageSquare,
            color: '#D32F2F',
            lightColor: '#FDEDED',
            descripcion: 'Inconformidad por deficiencia en productos o servicios'
        },
        {
            id: 'SUGERENCIA',
            nombre: 'SUGERENCIA',
            icon: ThumbsUp,
            color: '#2E7D32',
            lightColor: '#E8F5E9',
            descripcion: 'Propuesta para mejorar productos o servicios'
        }
    ];

    const steps = [
        { title: 'Tipo', subtitle: 'Selecciona el tipo', component: 'tipo' },
        { title: 'Datos', subtitle: 'Información personal', component: 'datos' },
        { title: 'Detalles', subtitle: 'Describe tu solicitud', component: 'descripcion' },
        { title: 'Confirmar', subtitle: 'Revisa y envía', component: 'confirmacion' }
    ];

    // Funciones
    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const navigateStep = (direction: number) => {
        if (direction > 0 && currentStep < steps.length - 1 && canProceed()) {
            setSlideDirection(1);
            setCurrentStep(currentStep + 1);
        } else if (direction < 0 && currentStep > 0) {
            setSlideDirection(-1);
            setCurrentStep(currentStep - 1);
        }
    };

    const canProceed = () => {
        switch (currentStep) {
            case 0:
                return formData.tipo !== '';
            case 1:
                return formData.nombre.trim().length >= 3 &&
                    formData.telefono.length >= 7 &&
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
            case 2:
                return formData.descripcion.trim().length >= 20;
            default:
                return true;
        }
    };

    const handleSubmit = async () => {
        console.log("Formulario enviado:", formData);

        try {
            const res = await fetch("/api/email/pqrs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log("Respuesta del servidor:", data);
        } catch (error) {
            console.error("Error enviando PQRS:", error);
        }

        setSlideDirection(1);
        setCurrentStep(4);
    };

    const getTipoInfo = () => {
        return tiposPQRS.find(tipo => tipo.id === formData.tipo);
    };

    // Render content con motion
    const renderStepContent = () => {
        const tipoInfo = getTipoInfo();
        const descripcionLength = formData.descripcion.trim().length;

        switch (currentStep) {
            case 0:
                return (
                    <motion.div
                        key="step-0"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#561A16] mb-3">
                                ¿Qué tipo de solicitud deseas realizar?
                            </h3>
                            <p className="text-gray-600">Selecciona la opción que mejor describa tu situación</p>
                        </motion.div>

                        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tiposPQRS.map((tipo, index) => {
                                const IconComponent = tipo.icon;
                                const isSelected = formData.tipo === tipo.id;

                                return (
                                    <motion.button
                                        key={tipo.id}
                                        variants={itemVariants}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => handleInputChange('tipo', tipo.id)}
                                        className={`relative p-4 md:p-6 rounded-xl border-2 transition-all duration-200 ${isSelected
                                            ? 'shadow-lg border-opacity-100'
                                            : 'border-gray-200 border-opacity-50 bg-white hover:border-gray-300'
                                            }`}
                                        style={{
                                            borderColor: isSelected ? tipo.color : '',
                                            backgroundColor: isSelected ? tipo.lightColor : 'white',
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSelected && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md"
                                            >
                                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                                            </motion.div>
                                        )}

                                        <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                                            <motion.div
                                                whileHover={{ rotate: 5, scale: 1.1 }}
                                                className="p-2 md:p-3 rounded-xl"
                                                style={{ backgroundColor: tipo.color }}
                                            >
                                                <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                            </motion.div>
                                            <h4 className={`font-semibold text-sm md:text-base ${isSelected ? '' : 'text-gray-700'
                                                }`} style={{ color: isSelected ? tipo.color : '' }}>
                                                {tipo.nombre}
                                            </h4>
                                            <p className="text-xs md:text-sm text-gray-500 leading-tight">
                                                {tipo.descripcion}
                                            </p>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                );

            case 1:
                return (
                    <motion.div
                        key="step-1"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-6">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center justify-center mb-3"
                            >
                                <div className="p-2 rounded-full bg-orange-100">
                                    <User className="w-6 h-6 md:w-7 md:h-7 text-orange-600" />
                                </div>
                            </motion.div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#561A16] mb-2">
                                Datos del Solicitante
                            </h3>
                            <p className="text-gray-600">Proporciona tu información de contacto</p>
                        </motion.div>

                        <motion.div variants={containerVariants} className="grid grid-cols-1 gap-4 md:gap-6">
                            {[
                                {
                                    field: 'nombre',
                                    label: 'Nombre Completo *',
                                    icon: User,
                                    validation: formData.nombre.length >= 3,
                                    error: 'El nombre debe tener al menos 3 caracteres'
                                },
                                {
                                    field: 'telefono',
                                    label: 'Teléfono *',
                                    icon: Phone,
                                    validation: formData.telefono.length >= 7,
                                    error: 'El teléfono debe tener al menos 7 dígitos',
                                    transform: (value: string) => value.replace(/[^\d]/g, ''),
                                    maxLength: 10
                                },
                                {
                                    field: 'email',
                                    label: 'Correo Electrónico *',
                                    icon: Mail,
                                    validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
                                    error: 'Ingresa un correo electrónico válido'
                                },
                                {
                                    field: 'direccion',
                                    label: 'Dirección (Opcional)',
                                    icon: MapPin,
                                    optional: true
                                }
                            ].map((fieldConfig, index) => (
                                <motion.div
                                    key={fieldConfig.field}
                                    variants={itemVariants}
                                    transition={{ delay: index * 0.1 }}
                                    className={fieldConfig.field === 'nombre' || fieldConfig.field === 'direccion' ? '' : 'md:col-span-1'}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {fieldConfig.label}
                                    </label>
                                    <div className="relative">
                                        <fieldConfig.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <motion.input
                                            type={fieldConfig.field === 'email' ? 'email' : 'text'}
                                            value={formData[fieldConfig.field as keyof FormData]}
                                            onChange={(e) => handleInputChange(
                                                fieldConfig.field,
                                                fieldConfig.transform ? fieldConfig.transform(e.target.value) : e.target.value
                                            )}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500 focus:outline-none transition-colors"
                                            style={{
                                                borderColor: fieldConfig.validation !== undefined
                                                    ? (fieldConfig.validation ? '#D4741C' : '#D1D5DB')
                                                    : '#D1D5DB'
                                            }}
                                            placeholder={fieldConfig.field === 'telefono' ? '300 123 4567' :
                                                fieldConfig.field === 'email' ? 'tu@email.com' :
                                                    fieldConfig.field === 'nombre' ? 'Tu nombre completo' : 'Dirección completa'}
                                            maxLength={fieldConfig.maxLength}
                                            whileFocus={{ scale: 1.01 }}
                                        />
                                    </div>
                                    {fieldConfig.validation !== undefined && formData[fieldConfig.field as keyof FormData] && !fieldConfig.validation
                                        && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="text-red-500 text-xs mt-1"
                                            >
                                                {fieldConfig.error}
                                            </motion.p>
                                        )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                );

            case 2:
                return (
                    <motion.div
                        key="step-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-6">
                            {tipoInfo && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-center justify-center mb-3"
                                >
                                    <div className="p-2 rounded-full bg-orange-100">
                                        <tipoInfo.icon className="w-6 h-6 md:w-7 md:h-7 text-orange-600" />
                                    </div>
                                </motion.div>
                            )}
                            <h3 className="text-2xl md:text-3xl font-bold text-[#561A16] mb-2">
                                Descripción de tu {tipoInfo?.nombre}
                            </h3>
                            <p className="text-gray-600">Explica detalladamente tu solicitud</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Descripción detallada *
                            </label>
                            <motion.textarea
                                value={formData.descripcion}
                                onChange={(e) => handleInputChange('descripcion', e.target.value)}
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                                style={{
                                    borderColor: descripcionLength >= 20 ? '#D4741C' :
                                        descripcionLength >= 10 ? '#ED6C02' : '#D1D5DB'
                                }}
                                placeholder={`Describe tu ${tipoInfo?.nombre.toLowerCase()} con el mayor detalle posible...`}
                                whileFocus={{ scale: 1.01 }}
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex justify-between items-center text-sm"
                            >
                                <span className="text-gray-500">Mínimo 20 caracteres</span>
                                <motion.span
                                    className={`${descripcionLength >= 20 ? 'text-green-600' :
                                        descripcionLength >= 10 ? 'text-orange-500' : 'text-red-500'
                                        }`}
                                    animate={{ scale: descripcionLength > 0 ? 1.1 : 1 }}
                                >
                                    {descripcionLength} caracteres{descripcionLength >= 20 && ' ✓'}
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                );

            case 3:
                return (
                    <motion.div
                        key="step-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-6">
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                className="p-3 rounded-full bg-green-100 inline-flex mb-3"
                            >
                                <CheckCircle className="w-12 h-12 md:w-14 md:h-14 text-green-500" />
                            </motion.div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#561A16] mb-2">
                                Confirma tu PQRS
                            </h3>
                            <p className="text-gray-600">Revisa la información antes de enviar</p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="bg-gray-50 rounded-lg p-4 md:p-6 space-y-4"
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="flex items-center space-x-3">
                                {tipoInfo && <tipoInfo.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: tipoInfo.color }} />}
                                <div>
                                    <h4 className="font-semibold text-gray-900">Tipo de solicitud</h4>
                                    <p className="text-gray-600">{tipoInfo?.nombre}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Solicitante</h4>
                                    <p className="text-gray-600">{formData.nombre}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Contacto</h4>
                                    <p className="text-gray-600">{formData.telefono}</p>
                                    <p className="text-gray-600 text-sm">{formData.email}</p>
                                </div>
                            </div>

                            {formData.direccion && (
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                                    <p className="text-gray-600">{formData.direccion}</p>
                                </div>
                            )}

                            <div className="pt-4 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-2">Descripción</h4>
                                <p className="text-gray-600 bg-white p-3 rounded border text-sm">
                                    {formData.descripcion}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                );

            case 4:
                return (
                    <motion.div
                        key="step-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="text-center py-8 md:py-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="p-4 rounded-full bg-green-100 inline-flex mb-4"
                        >
                            <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-green-500" />
                        </motion.div>
                        <motion.h3
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl md:text-3xl font-bold text-[#561A16] mb-3"
                        >
                            ¡PQRS Enviado Exitosamente!
                        </motion.h3>
                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-600 mb-6 max-w-md mx-auto"
                        >
                            Hemos recibido tu {tipoInfo?.nombre.toLowerCase()}. Te contactaremos pronto.
                        </motion.p>
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white rounded-lg p-4 md:p-6 shadow-lg max-w-sm mx-auto"
                        >
                            <h4 className="font-semibold text-gray-900 mb-3">Número de radicado</h4>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6, type: "spring" }}
                                className="text-xl md:text-2xl font-mono font-bold py-2 px-4 rounded border-2 border-orange-500 text-[#561A16]"
                            >
                                PQRS-{Date.now().toString().slice(-6)}
                            </motion.div>
                            <p className="text-gray-500 text-xs md:text-sm mt-2">
                                Guarda este número para hacer seguimiento
                            </p>
                        </motion.div>
                    </motion.div>
                );

            default:
                return <div>Error: Paso no válido</div>;
        }
    };

    if (currentStep === 4) {
        return (
            <div className="max-w-2xl mx-auto p-4">
                <div className="bg-white rounded-xl shadow-lg p-6 min-h-[400px] flex items-center justify-center">
                    {renderStepContent()}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* Progress bar con animación */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 md:mb-8"
            >
                <div className="flex items-center justify-between mb-3">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <motion.div
                                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${index <= currentStep
                                        ? 'bg-orange-600 text-white shadow-lg'
                                        : 'bg-gray-200 text-gray-500'
                                        }`}
                                    animate={{
                                        scale: index === currentStep ? 1.2 : 1
                                    }}
                                >
                                    {index + 1}
                                </motion.div>
                                <div className="mt-1 hidden sm:block">
                                    <p className={`font-medium text-xs md:text-sm transition-colors ${index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                                        }`}>
                                        {step.title}
                                    </p>
                                    <p className="text-xs text-gray-500">{step.subtitle}</p>
                                </div>
                            </motion.div>
                            {index < steps.length - 1 && (
                                <motion.div
                                    className="flex-1 h-1 mx-2 rounded-full transition-all duration-500"
                                    style={{
                                        backgroundColor: index < currentStep ? '#D4741C' : '#E5E7EB'
                                    }}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                ></motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </motion.div>

            {/* Step content con animación de slide */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 min-h-[400px] mb-6 overflow-hidden">
                <AnimatePresence mode="wait" custom={slideDirection}>
                    <motion.div
                        key={currentStep}
                        custom={slideDirection}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="h-full"
                    >
                        {renderStepContent()}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation buttons con animación */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-between"
            >
                <motion.button
                    onClick={() => navigateStep(-1)}
                    disabled={currentStep === 0}
                    className={`flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors ${currentStep === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    whileHover={currentStep !== 0 ? { scale: 1.05 } : {}}
                    whileTap={currentStep !== 0 ? { scale: 0.95 } : {}}
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Anterior</span>
                </motion.button>

                {currentStep === steps.length - 1 ? (
                    <motion.button
                        onClick={handleSubmit}
                        className="flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-orange-500 to-red-700 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Send className="w-4 h-4" />
                        <span>Enviar PQRS</span>
                    </motion.button>
                ) : (
                    <motion.button
                        onClick={() => navigateStep(1)}
                        disabled={!canProceed()}
                        className={`flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all ${canProceed()
                            ? 'bg-gradient-to-r from-orange-500 to-red-700 text-white hover:shadow-lg'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                        whileHover={canProceed() ? { scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' } : {}}
                        whileTap={canProceed() ? { scale: 0.95 } : {}}
                    >
                        <span>Siguiente</span>
                        <ChevronRight className="w-4 h-4" />
                    </motion.button>
                )}
            </motion.div>
        </div>
    );
};

export default PQRSForm;