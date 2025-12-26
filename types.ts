import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface VideoItem {
  id: string; // YouTube ID
  title: string;
  tag: string;
  thumbnailUrl: string;
  description: string; // New field for the details view
}

export interface CaseStudy {
  company: string;
  logoUrl: string;
  href: string;
  category: string;
  title: string;
  metrics: string[];
}

export interface ComparisonRow {
  criteria: string;
  maven: string;
  freelancers: string;
  inHouse: string;
  agencies: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}