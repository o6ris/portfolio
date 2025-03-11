# Changelog

## [0.2.0] - 2025-03-10

### 🚀 Features

- **Booking Call**: Users can now book a call through the chat interface.
- **Calendar Event Creation**: Added a workflow to add events to the personal calendar directly via the chat interface.
- **Chatbot Conversation Context**: Enhanced the chatbot to adapt its conversation using the last 10 previous messages for better context.
- **Textarea Input**: Replaced the user input field with a textarea to improve chat interactions and accommodate longer messages.
- **Chatbot Data Validation**: The chatbot now checks data before sending requests to ensure accuracy.
- **Error Handling**: Added error handling for calendar-related interactions in the `useChat` hook.
  
### 🐛 Fixes

- **Calendar Error Handling**: Resolved issues related to calendar errors and ensured proper handling within the `useChat` hook.
- **Email Confirmation**: Fixed an issue where the event creator was not receiving email confirmation after creating an event.

### 🛠️ Internal Updates

- **Booking Info Validation**: Implemented additional validation for booking information to ensure all data is correct before submission.
