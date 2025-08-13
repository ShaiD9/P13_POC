# POC Chat Your Car Your Way

Une application de chat simple utilisant Angular pour le front-end, Spring Boot pour le back-end, et WebSocket pour la communication en temps réel.

## Prérequis

- Node.js (https://nodejs.org/)
- Angular CLI (https://angular.io/cli)
- Java 17 (https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- Maven (https://maven.apache.org/)

## Installation

### Front-end (Angular)

1. Cloner le dépôt:
    ```bash
    git clone https://github.com/dversabeau/poc-oc-13
    cd poc-oc-13
    ```

2. Installer les dépendances:
    ```bash
    cd frontend
    npm install
    ```

### Back-end (Spring Boot)

1. Cloner le dépôt si ce n'est pas déjà fait:
    ```bash
    git clone https://github.com/dversabeau/poc-oc-13
    cd backend
    ```

2. Construire le projet:
    ```bash
    mvn clean install
    ```

## Lancement de l'application

### Front-end (Angular)

Pour démarrer le serveur Angular en mode développement:
```bash
ng serve
```

L'application sera accessible à l'adresse `http://localhost:4200/`.

### Back-end (Java Spring)

Pour démarrer le serveur Spring Boot:
```bash
mvn spring-boot:run
```

Le serveur sera accessible à l'adresse `http://localhost:8080/`.

