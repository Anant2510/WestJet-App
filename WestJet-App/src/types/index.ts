// This file exports types or interfaces used throughout the application for better type safety.

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Flight {
    flightNumber: string;
    departure: string;
    arrival: string;
    duration: number; // in minutes
}

export interface Booking {
    id: string;
    userId: string;
    flightNumber: string;
    bookingDate: Date;
    status: 'confirmed' | 'canceled' | 'pending';
}