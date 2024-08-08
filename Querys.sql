-- inserts medications
INSERT INTO medications (name, quantity, expiration_date, price) VALUES
('Aspirin', 100, '2025-01-01 00:00:00', 10.50),
('Ibuprofen', 200, '2024-06-15 00:00:00', 8.75),
('Paracetamol', 150, '2023-12-31 00:00:00', 5.20),
('Amoxicillin', 250, '2026-08-30 00:00:00', 12.00),
('Metformin', 180, '2024-05-22 00:00:00', 7.30),
('Lisinopril', 120, '2025-11-15 00:00:00', 9.60),
('Simvastatin', 130, '2023-09-10 00:00:00', 11.40),
('Omeprazole', 140, '2024-03-20 00:00:00', 6.80),
('Cetirizine', 160, '2025-07-25 00:00:00', 8.00),
('Diphenhydramine', 170, '2026-02-14 00:00:00', 9.20);

-- inserts patients
INSERT INTO patients (name, age, medical_history) VALUES
('John Doe', 45, 'Hypertension, Diabetes'),
('Jane Smith', 30, 'Allergic Rhinitis'),
('Emily Johnson', 54, 'Heart Disease'),
('Michael Brown', 40, 'Asthma'),
('Sarah Davis', 29, 'No significant medical history'),
('David Wilson', 62, 'Arthritis'),
('Laura Martinez', 37, 'Chronic Migraines'),
('Chris Taylor', 50, 'High Cholesterol'),
('Amanda Lee', 28, 'Seasonal Allergies'),
('James Harris', 48, 'Diabetes, Hypertension');

-- inserts prescriptions
INSERT INTO prescriptions (dosage, frequency, duration, patient_id, medication_id, createdAt, updatedAt) VALUES
('500 mg', 'Twice daily', 30, 1, 1, '2023-01-10 08:30:00', '2023-01-10 08:30:00'),
('250 mg', 'Once daily', 15, 1, 2, '2023-03-15 09:00:00', '2023-03-15 09:00:00'),
('200 mg', 'Once daily', 60, 2, 3, '2023-02-20 14:00:00', '2023-02-20 14:00:00'),
('650 mg', 'Every 8 hours', 7, 3, 4, '2023-04-25 16:00:00', '2023-04-25 16:00:00'),
('500 mg', 'Three times a day', 15, 3, 5, '2023-05-05 10:00:00', '2023-05-05 10:00:00'),
('1000 mg', 'Once daily', 30, 4, 6, '2023-06-10 11:30:00', '2023-06-10 11:30:00'),
('10 mg', 'Once daily', 90, 6, 7, '2023-07-15 12:45:00', '2023-07-15 12:45:00'),
('20 mg', 'Once daily', 30, 7, 8, '2023-08-20 15:00:00', '2023-08-20 15:00:00'),
('40 mg', 'Twice daily', 15, 7, 9, '2023-09-25 09:15:00', '2023-09-25 09:15:00'),
('10 mg', 'Once daily', 45, 9, 10, '2023-10-01 10:30:00', '2023-10-01 10:30:00'),
('25 mg', 'Every 4 hours', 10, 10, 1, '2023-11-05 11:00:00', '2023-11-05 11:00:00');

