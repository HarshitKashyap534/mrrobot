-- Components table
CREATE TABLE components (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  use_case TEXT,
  category VARCHAR(100),
  available_quantity INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Issues table
CREATE TABLE issues (
  id SERIAL PRIMARY KEY,
  issuer_name VARCHAR(255) NOT NULL,
  department VARCHAR(255),
  gr_number VARCHAR(20),
  phone VARCHAR(20),
  reason TEXT,
  issue_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'issued' -- 'issued' or 'returned'
);

-- Issue items table
CREATE TABLE issue_items (
  id SERIAL PRIMARY KEY,
  issue_id INTEGER REFERENCES issues(id),
  component_id INTEGER REFERENCES components(id),
  quantity INTEGER NOT NULL DEFAULT 1
);

-- Sample data for components
INSERT INTO components (name, description, use_case, category, available_quantity) VALUES
('Arduino Uno R3', 'Microcontroller board based on the ATmega328P', 'Perfect for beginners and versatile enough for advanced projects', 'Microcontrollers', 25),
('Raspberry Pi 4 (4GB)', 'Single-board computer with 4GB RAM', 'Ideal for projects requiring more computing power like AI applications', 'Microcontrollers', 10),
('HC-SR04 Ultrasonic Sensor', 'Distance measuring sensor module', 'Used for obstacle detection and distance measurement in robotics', 'Sensors', 50),
('Servo Motor MG996R', 'High torque metal gear servo motor', 'Perfect for robotics projects requiring precise movement control', 'Motors', 30),
('DHT22 Temperature & Humidity Sensor', 'Digital temperature and humidity sensor', 'Ideal for environmental monitoring and weather station projects', 'Sensors', 20);

