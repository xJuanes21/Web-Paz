'use client'
import React, { useState } from 'react';
import {
    ChevronRight,
    ChevronLeft,
    Shield,
    AlertTriangle,
    Eye,
    Lightbulb,
    FileText,
    User,
    Send,
    CheckCircle,
    Lock,
    Phone,
    Mail,
    MapPin,
    Calendar,
    Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LineaEticaForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [numberLE, setNumberLE] = useState(0);
    const [slideDirection, setSlideDirection] = useState(0);
    const [formData, setFormData] = useState({
        tipoReporte: '',
        esAnonimo: false,
        personas: '',
        fecha: '',
        lugar: '',
        relacionHechos: '',
        detallesAdicionales: '',
        tienePruebas: '',
        descripcionPruebas: '',
        sugerenciaPrevencion: '',
        sugerenciaCorreccion: '',
        nombre: '',
        cargo: '',
        area: '',
        telefono: '',
        email: '',
        fechaEnvio: new Date().toISOString().split('T')[0]
    });

    // Animaciones IDÉNTICAS al PQRS
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

    // Paleta de colores IDÉNTICA al PQRS
    const colorPalette = {
        primary: '#561A16',
        secondary: '#D4741C',
        accent: '#A8441A',
        light: '#F8F4F0',
        muted: '#8B7355',
        success: '#2E7D32',
        warning: '#ED6C02',
        error: '#D32F2F'
    };

    // Tipos de reporte para Línea Ética
    const tiposReporte = [
        {
            id: 'QUEJA',
            nombre: 'PRESENTAR QUEJA',
            icon: AlertTriangle,
            color: colorPalette.error,
            lightColor: '#FDEDED',
            descripcion: 'Reportar situaciones de acoso laboral o comportamientos inapropiados'
        },
        {
            id: 'SUGERENCIA',
            nombre: 'PRESENTAR SUGERENCIA',
            icon: Lightbulb,
            color: colorPalette.success,
            lightColor: '#E8F5E9',
            descripcion: 'Proponer mejoras para prevenir situaciones de acoso laboral'
        }
    ];

    // Steps adaptados para Línea Ética
    const steps = [
        { title: 'Tipo', subtitle: 'Queja o Sugerencia', component: 'tipo' },
        { title: 'Modalidad', subtitle: 'Anónimo o Identificado', component: 'modalidad' },
        { title: 'Hechos', subtitle: 'Descripción detallada', component: 'hechos' },
        { title: 'Evidencias', subtitle: 'Pruebas disponibles', component: 'evidencias' },
        { title: 'Sugerencias', subtitle: 'Prevención y corrección', component: 'sugerencias' },
        { title: 'Confirmar', subtitle: 'Revisar y enviar', component: 'confirmacion' }
    ];

    // Función IDÉNTICA al PQRS
    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Navegación IDÉNTICA al PQRS
    const navigateStep = (direction: number) => {
        if (direction > 0 && currentStep < steps.length - 1 && canProceed()) {
            setSlideDirection(1);
            setCurrentStep(currentStep + 1);
        } else if (direction < 0 && currentStep > 0) {
            setSlideDirection(-1);
            setCurrentStep(currentStep - 1);
        }
    };

    // Lógica de validación adaptada para Línea Ética
    const canProceed = () => {
        switch (currentStep) {
            case 0:
                return formData.tipoReporte !== '';
            case 1:
                return true; // Modalidad siempre puede proceder
            case 2:
                const hasValidContactInfo = formData.esAnonimo ||
                    (formData.nombre.trim().length >= 3 &&
                        formData.telefono.length >= 7 &&
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email));

                return hasValidContactInfo && formData.relacionHechos.trim().length >= 20;
            case 3:
                return formData.tienePruebas !== '';
            case 4:
                return true; // Sugerencias son opcionales
            default:
                return true;
        }
    };

    const handleSubmit = async () => {
        console.log('Reporte de línea ética enviado:', formData);

        try {
            const res = await fetch("/api/email/etic-line", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log("Respuesta del servidor:", data);
            setNumberLE(data.numeroLE);
        } catch (error) {
            console.error("Error enviando PQRS:", error);
        }

        setSlideDirection(1);
        setCurrentStep(6); // Paso de éxito
    };

    // Render content - ESTRUCTURA IDÉNTICA al PQRS
    const renderStepContent = () => {
        const relacionHechosLength = formData.relacionHechos.trim().length;

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
                            <Shield className="w-16 h-16 mx-auto mb-4" style={{ color: colorPalette.primary }} />
                            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: colorPalette.primary }}>
                                Línea Ética Empresarial
                            </h3>
                            <p className="text-lg" style={{ color: colorPalette.muted }}>
                                Sistema confidencial para reportar situaciones de acoso laboral
                            </p>
                        </motion.div>

                        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tiposReporte.map((tipo, index) => {
                                const IconComponent = tipo.icon;
                                const isSelected = formData.tipoReporte === tipo.id;

                                return (
                                    <motion.button
                                        key={tipo.id}
                                        variants={itemVariants}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => handleInputChange('tipoReporte', tipo.id)}
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
                                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5" style={{ color: colorPalette.success }} />
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
                        <motion.div variants={itemVariants} className="text-center mb-8">
                            <Eye className="w-12 h-12 mx-auto mb-4" style={{ color: colorPalette.primary }} />
                            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: colorPalette.primary }}>
                                Modalidad del Reporte
                            </h3>
                            <p className="text-lg" style={{ color: colorPalette.muted }}>
                                Elige cómo deseas presentar tu reporte
                            </p>
                        </motion.div>

                        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {
                                    anonymous: false,
                                    icon: User,
                                    title: 'IDENTIFICADO',
                                    description: 'Proporcionarás tu información personal para seguimiento directo',
                                    color: colorPalette.secondary
                                },
                                {
                                    anonymous: true,
                                    icon: Lock,
                                    title: 'ANÓNIMO',
                                    description: 'Tu identidad se mantendrá completamente confidencial',
                                    color: '#8B5CF6'
                                }
                            ].map((modalidad, index) => (
                                <motion.button
                                    key={modalidad.title}
                                    variants={itemVariants}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => handleInputChange('esAnonimo', modalidad.anonymous)}
                                    className={`relative p-4 md:p-6 rounded-xl border-2 transition-all duration-200 ${formData.esAnonimo === modalidad.anonymous
                                        ? 'shadow-lg border-opacity-100'
                                        : 'border-gray-200 border-opacity-50 bg-white hover:border-gray-300'
                                        }`}
                                    style={{
                                        borderColor: formData.esAnonimo === modalidad.anonymous ? modalidad.color : '',
                                        backgroundColor: formData.esAnonimo === modalidad.anonymous ? `${modalidad.color}20` : 'white',
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {formData.esAnonimo === modalidad.anonymous && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md"
                                        >
                                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5" style={{ color: colorPalette.success }} />
                                        </motion.div>
                                    )}

                                    <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                                        <div className="p-2 md:p-3 rounded-xl" style={{ backgroundColor: modalidad.color }}>
                                            <modalidad.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                        </div>
                                        <h4 className="font-semibold text-sm md:text-base" style={{ color: modalidad.color }}>
                                            {modalidad.title}
                                        </h4>
                                        <p className="text-xs md:text-sm text-gray-500 leading-tight">
                                            {modalidad.description}
                                        </p>
                                    </div>
                                </motion.button>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <p className="text-yellow-800 text-sm">
                                <strong>Importante:</strong> Los reportes anónimos son válidos pero pueden limitar el seguimiento personalizado.
                            </p>
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
                        <motion.div variants={itemVariants} className="text-center mb-8">
                            <FileText className="w-12 h-12 mx-auto mb-4" style={{ color: colorPalette.primary }} />
                            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: colorPalette.primary }}>
                                Relación de los Hechos
                            </h3>
                            <p className="text-lg" style={{ color: colorPalette.muted }}>
                                Describe detalladamente la situación
                            </p>
                        </motion.div>

                        {/* SECCIÓN DE DATOS PERSONALES SOLO SI ES IDENTIFICADO */}
                        {!formData.esAnonimo && (
                            <motion.div variants={itemVariants} className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                                <h4 className="font-semibold text-lg mb-4" style={{ color: colorPalette.primary }}>
                                    📝 Datos de Contacto
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Nombre Completo *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="text"
                                                value={formData.nombre}
                                                onChange={(e) => handleInputChange('nombre', e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-blue-500 focus:outline-none transition-colors"
                                                style={{
                                                    borderColor: formData.nombre.length >= 3 ? colorPalette.secondary : '#D1D5DB'
                                                }}
                                                placeholder="Tu nombre completo"
                                            />
                                        </div>
                                        {formData.nombre.length > 0 && formData.nombre.length < 3 && (
                                            <p className="text-red-500 text-xs mt-1">El nombre debe tener al menos 3 caracteres</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Teléfono *
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="tel"
                                                value={formData.telefono}
                                                onChange={(e) => handleInputChange('telefono', e.target.value.replace(/[^\d]/g, ''))}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-blue-500 focus:outline-none transition-colors"
                                                style={{
                                                    borderColor: formData.telefono.length >= 7 ? colorPalette.secondary : '#D1D5DB'
                                                }}
                                                placeholder="300 123 4567"
                                                maxLength={10}
                                            />
                                        </div>
                                        {formData.telefono.length > 0 && formData.telefono.length < 7 && (
                                            <p className="text-red-500 text-xs mt-1">El teléfono debe tener al menos 7 dígitos</p>
                                        )}
                                    </div>

                                    <div className="md:col-span-2 space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Correo Electrónico *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-blue-500 focus:outline-none transition-colors"
                                                style={{
                                                    borderColor: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? colorPalette.secondary : '#D1D5DB'
                                                }}
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                        {formData.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                                            <p className="text-red-500 text-xs mt-1">Ingresa un correo electrónico válido</p>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm text-blue-600 mt-3">
                                    🔒 Tu información es confidencial y solo será vista por el Comité de Convivencia Laboral
                                </p>
                            </motion.div>
                        )}

                        <motion.div variants={containerVariants} className="space-y-6">
                            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="block text-sm font-semibold" style={{ color: colorPalette.primary }}>
                                        ¿Quiénes estuvieron involucrados? *
                                    </label>
                                    <motion.textarea
                                        value={formData.personas}
                                        onChange={(e) => handleInputChange('personas', e.target.value)}
                                        rows={3}
                                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all resize-none"
                                        style={{ borderColor: '#E5E7EB' }}
                                        placeholder="Nombres, cargos o descripciones..."
                                        whileFocus={{ scale: 1.01 }}
                                    />
                                </div>

                                <motion.div variants={itemVariants} className="space-y-4">
                                    <div className="space-y-3">
                                        <label className="block text-sm font-semibold" style={{ color: colorPalette.primary }}>
                                            ¿Cuándo ocurrió?
                                        </label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="date"
                                                value={formData.fecha}
                                                onChange={(e) => handleInputChange('fecha', e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all"
                                                style={{ borderColor: '#E5E7EB' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="block text-sm font-semibold" style={{ color: colorPalette.primary }}>
                                            ¿Dónde ocurrió?
                                        </label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="text"
                                                value={formData.lugar}
                                                onChange={(e) => handleInputChange('lugar', e.target.value)}
                                                className="w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all"
                                                style={{ borderColor: '#E5E7EB' }}
                                                placeholder="Lugar específico..."
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-4">
                                <label className="block text-sm font-semibold" style={{ color: colorPalette.primary }}>
                                    Descripción detallada de los hechos *
                                </label>
                                <motion.textarea
                                    value={formData.relacionHechos}
                                    onChange={(e) => handleInputChange('relacionHechos', e.target.value)}
                                    rows={6}
                                    className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all resize-none"
                                    style={{
                                        borderColor: relacionHechosLength >= 20 ? colorPalette.secondary :
                                            relacionHechosLength >= 10 ? colorPalette.warning : '#E5E7EB'
                                    }}
                                    placeholder="Describe de forma cronológica y detallada lo que ocurrió..."
                                    whileFocus={{ scale: 1.01 }}
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-between items-center text-sm"
                                >
                                    <span style={{ color: colorPalette.muted }}>Mínimo 20 caracteres</span>
                                    <motion.span
                                        style={{
                                            color: relacionHechosLength >= 20 ? colorPalette.success :
                                                relacionHechosLength >= 10 ? colorPalette.warning : colorPalette.error
                                        }}
                                        animate={{ scale: relacionHechosLength > 0 ? 1.1 : 1 }}
                                    >
                                        {relacionHechosLength} caracteres{relacionHechosLength >= 20 && ' ✓'}
                                    </motion.span>
                                </motion.div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-3">
                                <label className="block text-sm font-semibold" style={{ color: colorPalette.primary }}>
                                    Detalles adicionales (opcional)
                                </label>
                                <motion.textarea
                                    value={formData.detallesAdicionales}
                                    onChange={(e) => handleInputChange('detallesAdicionales', e.target.value)}
                                    rows={3}
                                    className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all resize-none"
                                    style={{ borderColor: '#E5E7EB' }}
                                    placeholder="Información adicional que consideres relevante..."
                                    whileFocus={{ scale: 1.01 }}
                                />
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
                        <motion.div variants={itemVariants} className="text-center mb-8">
                            <FileText className="w-12 h-12 mx-auto mb-4" style={{ color: colorPalette.primary }} />
                            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: colorPalette.primary }}>
                                Evidencias y Pruebas
                            </h3>
                            <p className="text-lg" style={{ color: colorPalette.muted }}>
                                ¿Cuentas con alguna prueba de lo ocurrido?
                            </p>
                        </motion.div>

                        <motion.div variants={containerVariants} className="space-y-6">
                            <motion.div variants={itemVariants} className="space-y-4">
                                <label className="block text-sm font-semibold" style={{ color: colorPalette.primary }}>
                                    ¿Cuentas con alguna prueba? *
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {['SÍ', 'NO', 'PARCIALMENTE'].map((option) => (
                                        <motion.button
                                            key={option}
                                            onClick={() => handleInputChange('tienePruebas', option)}
                                            className={`p-4 rounded-lg border-2 text-center transition-all ${formData.tienePruebas === option
                                                ? 'border-orange-500 bg-orange-50 text-orange-700'
                                                : 'border-gray-200 hover:border-gray-300 bg-white text-gray-600'
                                                }`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="font-medium">{option}</span>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>

                            {formData.tienePruebas && formData.tienePruebas !== 'NO' && (
                                <motion.div variants={itemVariants} className="space-y-3">
                                    <label className="block text-sm font-semibold" style={{ color: colorPalette.primary }}>
                                        Describe las pruebas que tienes
                                    </label>
                                    <motion.textarea
                                        value={formData.descripcionPruebas}
                                        onChange={(e) => handleInputChange('descripcionPruebas', e.target.value)}
                                        rows={4}
                                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all resize-none"
                                        style={{ borderColor: '#E5E7EB' }}
                                        placeholder="Describe qué tipo de evidencias tienes..."
                                        whileFocus={{ scale: 1.01 }}
                                    />
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                );

            case 4:
                return (
                    <motion.div
                        key="step-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-8">
                            <Lightbulb className="w-12 h-12 mx-auto mb-4" style={{ color: colorPalette.primary }} />
                            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: colorPalette.primary }}>
                                Sugerencias
                            </h3>
                            <p className="text-lg" style={{ color: colorPalette.muted }}>
                                Ayúdanos a mejorar nuestros procesos
                            </p>
                        </motion.div>

                        <motion.div variants={containerVariants} className="space-y-6">
                            <motion.div variants={itemVariants} className="space-y-3">
                                <label className="block text-sm font-semibold" style={{ color: colorPalette.primary }}>
                                    Sugerencias para la prevención
                                </label>
                                <motion.textarea
                                    value={formData.sugerenciaPrevencion}
                                    onChange={(e) => handleInputChange('sugerenciaPrevencion', e.target.value)}
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all resize-none"
                                    style={{ borderColor: '#E5E7EB' }}
                                    placeholder="Propón medidas preventivas..."
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-3">
                                <label className="block text-sm font-semibold" style={{ color: colorPalette.primary }}>
                                    Sugerencias para la corrección
                                </label>
                                <motion.textarea
                                    value={formData.sugerenciaCorreccion}
                                    onChange={(e) => handleInputChange('sugerenciaCorreccion', e.target.value)}
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all resize-none"
                                    style={{ borderColor: '#E5E7EB' }}
                                    placeholder="Sugiere mejoras en los procedimientos..."
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                );

            case 5:
                return (
                    <motion.div
                        key="step-5"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-8">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: colorPalette.primary }}>
                                Confirmar Envío
                            </h3>
                            <p className="text-lg" style={{ color: colorPalette.muted }}>
                                Revisa tu reporte antes de enviarlo
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-6 space-y-4">
                            <div className="flex items-center space-x-3">
                                <div>
                                    <h4 className="font-semibold" style={{ color: colorPalette.primary }}>Tipo de reporte:</h4>
                                    <p className="text-gray-600">{formData.tipoReporte}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <h4 className="font-semibold" style={{ color: colorPalette.primary }}>Modalidad:</h4>
                                <span className={`px-3 py-1 rounded-full text-sm ${formData.esAnonimo ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                                    }`}>
                                    {formData.esAnonimo ? 'ANÓNIMO' : 'IDENTIFICADO'}
                                </span>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <h4 className="font-semibold mb-2" style={{ color: colorPalette.primary }}>Resumen del reporte:</h4>
                                <p className="text-gray-600 text-sm bg-white p-3 rounded border">
                                    {formData.relacionHechos}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                );

            case 6:
                return (
                    <motion.div
                        key="step-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="text-center py-12"
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
                            className="text-3xl font-bold mb-4"
                            style={{ color: colorPalette.primary }}
                        >
                            ¡Reporte Enviado Exitosamente!
                        </motion.h3>
                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl mb-8 max-w-2xl mx-auto"
                            style={{ color: colorPalette.muted }}
                        >
                            Hemos recibido tu {formData.tipoReporte.toLowerCase()}. El Comité de Convivencia Laboral evaluará tu caso.
                        </motion.p>
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto"
                        >
                            <h4 className="font-semibold mb-4 text-lg" style={{ color: colorPalette.primary }}>
                                Número de radicado
                            </h4>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6, type: "spring" }}
                                className="text-2xl font-mono font-bold py-3 px-6 rounded-lg border-2"
                                style={{
                                    borderColor: colorPalette.secondary,
                                    color: colorPalette.primary
                                }}
                            >
                                LE-{numberLE}
                            </motion.div>
                            <p className="text-sm mt-4" style={{ color: colorPalette.muted }}>
                                Guarda este número para hacer seguimiento
                            </p>
                        </motion.div>
                    </motion.div>
                );

            default:
                return <div>Error: Paso no válido</div>;
        }
    };

    if (currentStep === 6) {
        return (
            <div className="max-w-2xl mx-auto p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 min-h-[500px] flex items-center justify-center">
                    {renderStepContent()}
                </div>
            </div>
        );
    }

    // REST OF THE CODE IDÉNTICO al PQRS...
    // (Progress bar, navigation buttons, etc.)

    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* Progress bar IDÉNTICA al PQRS */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <div className="flex items-center justify-between mb-4">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <motion.div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${index <= currentStep
                                        ? 'bg-orange-600 text-white shadow-lg'
                                        : 'bg-gray-200 text-gray-500'
                                        }`}
                                    animate={{
                                        scale: index === currentStep ? 1.2 : 1
                                    }}
                                >
                                    {index + 1}
                                </motion.div>
                                <div className="mt-2 hidden md:block">
                                    <p className={`font-medium text-sm transition-colors ${index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                                        }`}>
                                        {step.title}
                                    </p>
                                    <p className="text-xs text-gray-500">{step.subtitle}</p>
                                </div>
                            </motion.div>
                            {index < steps.length - 1 && (
                                <motion.div
                                    className="flex-1 h-1 mx-4 rounded-full transition-all duration-500"
                                    style={{
                                        backgroundColor: index < currentStep ? colorPalette.secondary : '#E5E7EB'
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

            {/* Step content IDÉNTICO al PQRS */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 min-h-[500px] mb-6 overflow-hidden">
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

            {/* Navigation buttons IDÉNTICOS al PQRS */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-between"
            >
                <motion.button
                    onClick={() => navigateStep(-1)}
                    disabled={currentStep === 0}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${currentStep === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    whileHover={currentStep !== 0 ? { scale: 1.05 } : {}}
                    whileTap={currentStep !== 0 ? { scale: 0.95 } : {}}
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Anterior</span>
                </motion.button>

                {currentStep === steps.length - 1 ? (
                    <motion.button
                        onClick={handleSubmit}
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-700 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Send className="w-4 h-4" />
                        <span>Enviar Reporte</span>
                    </motion.button>
                ) : (
                    <motion.button
                        onClick={() => navigateStep(1)}
                        disabled={!canProceed()}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${canProceed()
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

export default LineaEticaForm;