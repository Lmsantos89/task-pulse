# Base image with Java 21
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy Gradle files and source code
COPY build.gradle gradlew settings.gradle ./
COPY gradle ./gradle
COPY src ./src

# Build the app (excluding tests for speed)
RUN ./gradlew build -x test

# Expose the app port (8080)
EXPOSE 8080

# Run the app with the 'local' profile
CMD ["java", "-jar", "-Dspring.profiles.active=local", "build/libs/taskpulse-backend-0.0.1-SNAPSHOT.jar"]