-- Habilitar extensión UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla de Usuarios
CREATE TABLE usuarios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tipo_usuario VARCHAR(50) NOT NULL CHECK (tipo_usuario IN ('candidato', 'freelancer', 'empresa', 'admin')),
    auth_id UUID, -- Referencia al auth.users de Supabase
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    region VARCHAR(100) DEFAULT 'Piura',
    ciudad VARCHAR(100),
    estado VARCHAR(20) DEFAULT 'activo' CHECK (estado IN ('activo', 'eliminado')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Perfiles Freelance
CREATE TABLE perfiles_freelance (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_usuario UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    titular VARCHAR(255) NOT NULL,
    tarifa_hora DECIMAL(10, 2),
    portafolio_url TEXT,
    es_destacado BOOLEAN DEFAULT false,
    estado VARCHAR(20) DEFAULT 'activo' CHECK (estado IN ('activo', 'eliminado')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(id_usuario)
);

-- Tabla de Empleos
CREATE TABLE empleos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_empresa UUID REFERENCES usuarios(id) ON DELETE SET NULL, -- Opcional
    titulo VARCHAR(255) NOT NULL,
    tipo_oferta VARCHAR(50) NOT NULL CHECK (tipo_oferta IN ('cas_estado', 'privado', 'freelance')),
    modalidad VARCHAR(50) NOT NULL, -- Remoto, Presencial, Híbrido
    region VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    url_origen TEXT, -- URL original para scraper
    es_destacado BOOLEAN DEFAULT false,
    estado VARCHAR(20) DEFAULT 'activo' CHECK (estado IN ('activo', 'eliminado')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Transacciones (MercadoPago)
CREATE TABLE transacciones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_usuario UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    id_mercadopago VARCHAR(255) UNIQUE NOT NULL,
    tipo_plan VARCHAR(50) NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    estado_pago VARCHAR(50) NOT NULL, -- 'approved', 'pending', 'rejected'
    estado VARCHAR(20) DEFAULT 'activo' CHECK (estado IN ('activo', 'eliminado')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================
-- SEED DATA (Datos de Prueba)
-- ==========================================
INSERT INTO empleos (titulo, tipo_oferta, modalidad, region, ciudad, descripcion, url_origen, es_destacado)
VALUES 
('Ingeniero de Sistemas CAS', 'cas_estado', 'Presencial', 'Piura', 'Piura', 'Req. Ing de sistemas para soporte técnico en la municipalidad.', 'https://empleosperu.gob.pe/prueba1', false),
('Desarrollador Web React', 'privado', 'Remoto', 'Piura', 'Talara', 'Buscamos dev React con experiencia en Next.js para agencia digital.', null, true),
('Diseñador Gráfico Freelance', 'freelance', 'Remoto', 'Piura', 'Talara', 'Diseño de marca para nuevo restaurante local en Playa Las Peñitas.', null, false);
