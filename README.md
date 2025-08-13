# POC Chat Your Car Your Way

POC d'un chat simple utilisant Angular et Spring Boot, pour prouver la faisabilité technique d'un chat entre utilisateur et support.

## Prérequis

- Node.js (https://nodejs.org/)
- Angular CLI (https://angular.io/cli)
- Java 17 (https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- Maven (https://maven.apache.org/)

## Installation

### Cloner le repo

    git clone https://github.com/ShaiD9/P13_POC

### Front-end (Angular)

1. Aller dans le frontend:
    ```bash
    cd P13_POC/front
    ```

2. Installer les dépendances:
    ```bash
    npm install
    ```

### Back-end (Spring Boot)

1. Cloner le dépôt si ce n'est pas déjà fait:
    ```bash
    cd P13_POC/backend
    ```

2. Construire le projet:
    ```bash
    mvn clean install
    ```

## Lancement de l'application

### Front-end (Angular)

Pour démarrer le front :
```bash
ng serve
```

L'application sera accessible à l'adresse `http://localhost:4200/`.

### Back-end (Java Spring)

Pour démarrer le back :
```bash
mvn spring-boot:run
```

