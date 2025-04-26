// Datos de todos los servicios de calibración, con soporte para internacionalización
interface Servicio {
  id: string;
  imagen: string;
  detalles: {
    es: string[];
    en: string[];
  };
}

interface ServicioTraducciones {
  es: {
    titulo: string;
    descripcion: string;
    servicio: string;
  };
  en: {
    titulo: string;
    descripcion: string;
    servicio: string;
  };
}

export const SERVICIOS: (Servicio & ServicioTraducciones)[] = [
  {
    id: "presion",
    imagen: "/images/presion.avif",
    es: {
      titulo: "Presión",
      descripcion: "Calibración de instrumentos de medición de presión con trazabilidad al CENAM.",
      servicio: "Calibración de manómetros, transmisores de presión y otros instrumentos de medición de presión."
    },
    en: {
      titulo: "Pressure",
      descripcion: "Calibration of pressure measuring instruments with traceability to CENAM.",
      servicio: "Calibration of pressure gauges, pressure transmitters and other pressure measurement instruments."
    },
    detalles: {
      es: [
        "Calibración de manómetros analógicos y digitales",
        "Calibración de transmisores de presión",
        "Calibración de presostatos",
        "Calibración de transductores de presión",
        "Rango de calibración: desde vacío hasta 10,000 psi",
        "Incertidumbre: Consultar según instrumento"
      ],
      en: [
        "Calibration of analog and digital pressure gauges",
        "Calibration of pressure transmitters",
        "Calibration of pressure switches",
        "Calibration of pressure transducers",
        "Calibration range: from vacuum to 10,000 psi",
        "Uncertainty: Consult according to instrument"
      ]
    }
  },
  {
    id: "temperatura",
    imagen: "/images/temperatura.avif",
    es: {
      titulo: "Temperatura",
      descripcion: "Servicios de calibración para equipos de medición de temperatura.",
      servicio: "Calibración de termómetros, termopares, RTDs y otros instrumentos de medición térmica."
    },
    en: {
      titulo: "Temperature",
      descripcion: "Calibration services for temperature measurement equipment.",
      servicio: "Calibration of thermometers, thermocouples, RTDs and other thermal measurement instruments."
    },
    detalles: {
      es: [
        "Calibración de termómetros digitales y analógicos",
        "Calibración de termopares",
        "Calibración de RTDs (PT100, PT1000)",
        "Calibración de termistores",
        "Rango de calibración: -30°C a 500°C",
        "Incertidumbre: Consultar según instrumento"
      ],
      en: [
        "Calibration of digital and analog thermometers",
        "Calibration of thermocouples",
        "Calibration of RTDs (PT100, PT1000)",
        "Calibration of thermistors",
        "Calibration range: -30°C to 500°C",
        "Uncertainty: Consult according to instrument"
      ]
    }
  },
  {
    id: "flujo",
    imagen: "/images/flujo.avif",
    es: {
      titulo: "Flujo",
      descripcion: "Calibración de medidores de flujo para aplicaciones en el sector Oil & Gas.",
      servicio: "Verificación y calibración de medidores de flujo para líquidos y gases en la industria petrolera."
    },
    en: {
      titulo: "Flow",
      descripcion: "Calibration of flow meters for applications in the Oil & Gas sector.",
      servicio: "Verification and calibration of flow meters for liquids and gases in the oil industry."
    },
    detalles: {
      es: [
        "Calibración de medidores de flujo másico",
        "Calibración de medidores de flujo volumétrico",
        "Calibración de rotámetros",
        "Calibración de medidores de flujo ultrasónicos",
        "Calibración de medidores de flujo electromagnéticos",
        "Rango e incertidumbre: Consultar según instrumento"
      ],
      en: [
        "Calibration of mass flow meters",
        "Calibration of volumetric flow meters",
        "Calibration of rotameters",
        "Calibration of ultrasonic flow meters",
        "Calibration of electromagnetic flow meters",
        "Range and uncertainty: Consult according to instrument"
      ]
    }
  },
  {
    id: "volumen",
    imagen: "/images/volumen.avif",
    es: {
      titulo: "Volumen",
      descripcion: "Calibración de instrumentos volumétricos con precisión certificada.",
      servicio: "Calibración de tanques, probadores y otros instrumentos de medición volumétrica."
    },
    en: {
      titulo: "Volume",
      descripcion: "Calibration of volumetric instruments with certified precision.",
      servicio: "Calibration of tanks, provers and other volumetric measurement instruments."
    },
    detalles: {
      es: [
        "Calibración de tanques de almacenamiento",
        "Calibración de probadores de desplazamiento",
        "Calibración de probadores de volumen",
        "Calibración de medidores volumétricos",
        "Calibración de pipetas y buretas",
        "Rango e incertidumbre: Consultar según instrumento"
      ],
      en: [
        "Calibration of storage tanks",
        "Calibration of displacement provers",
        "Calibration of volume provers",
        "Calibration of volumetric meters",
        "Calibration of pipettes and burettes",
        "Range and uncertainty: Consult according to instrument"
      ]
    }
  },
  {
    id: "dimensional",
    imagen: "/images/dimensional.avif",
    es: {
      titulo: "Dimensional",
      descripcion: "Calibración de medidores de nivel y otros instrumentos dimensionales.",
      servicio: "Verificación de instrumentos de medición dimensional y calibración de medidores de nivel."
    },
    en: {
      titulo: "Dimensional",
      descripcion: "Calibration of level meters and other dimensional instruments.",
      servicio: "Verification of dimensional measuring instruments and calibration of level meters."
    },
    detalles: {
      es: [
        "Calibración de medidores de nivel",
        "Calibración de cintas de medición",
        "Calibración de vernier",
        "Calibración de micrómetros",
        "Calibración de indicadores de carátula",
        "Rango e incertidumbre: Consultar según instrumento"
      ],
      en: [
        "Calibration of level meters",
        "Calibration of measuring tapes",
        "Calibration of vernier calipers",
        "Calibration of micrometers",
        "Calibration of dial indicators",
        "Range and uncertainty: Consult according to instrument"
      ]
    }
  },
  {
    id: "masa",
    imagen: "/images/masa.avif",
    es: {
      titulo: "Masa",
      descripcion: "Servicios de calibración para instrumentos de pesaje y medición de masa.",
      servicio: "Calibración de balanzas, básculas y otros instrumentos de pesaje con trazabilidad."
    },
    en: {
      titulo: "Mass",
      descripcion: "Calibration services for weighing and mass measurement instruments.",
      servicio: "Calibration of balances, scales and other weighing instruments with traceability."
    },
    detalles: {
      es: [
        "Calibración de balanzas analíticas",
        "Calibración de básculas industriales",
        "Calibración de pesas patrón",
        "Calibración de balanzas de precisión",
        "Calibración de balanzas de plataforma",
        "Rango: 1 mg hasta 500 kg",
        "Incertidumbre: Consultar según instrumento"
      ],
      en: [
        "Calibration of analytical balances",
        "Calibration of industrial scales",
        "Calibration of standard weights",
        "Calibration of precision balances",
        "Calibration of platform scales",
        "Range: 1 mg to 500 kg",
        "Uncertainty: Consult according to instrument"
      ]
    }
  },
];