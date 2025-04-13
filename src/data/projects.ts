import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "FlavorSync App",
    description: "A food recommendation app using AI and Google Reviews for personalized dining suggestions.",
    techUsed: "React Native, Node.js, MongoDB, Google Places API, OpenRouter API",
    image: { url: "../images/flavorsync.jpg" }
  },
  {
    title: "YumMeal",
    description: "A food delivery app similar to Swiggy, built with React Native and Expo.",
    techUsed: "React Native, Expo, Firebase, MongoDB",
    image: { url: "../images/yummeal.jpg" }
  },
  {
    title: "Plant Disease Detection",
    description: "A plant disease detection project using a hybrid ResNet50 and MobileNetV2 model with LSTM.",
    techUsed: "Flask, MongoDB, TensorFlow, Python, ResNet50, MobileNetV2, LSTM",
    image: { url: "../images/plantdisease.jpg" }
  },
  {
    title: "Cara Voice-enabled Chatbot",
    description: "A voice-enabled chatbot app supporting text and voice inputs with AI responses.",
    techUsed: "React Native, Expo, Node.js, Together API, Google Speech-to-Text, Expo Text-to-Speech",
    image: { url: "../images/cara.jpg" }
  },
  {
    title: "Personal Email Assistant",
    description: "An AI-powered email assistant for composing professional emails with tone adjustment and PDF export.",
    techUsed: "Gradio, GPT-3.5, Flask, PDF Generation",
    image: { url: "../images/emailassistant.png" }
  }
]; 