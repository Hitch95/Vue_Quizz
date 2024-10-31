# TP : CI/CD et Améliorations en Vue.js pour l'Application de Quiz

Ajouter des fonctionnalités avancées en Vue.js à notre application de quiz, puis mettre en place un système CI/CD pour automatiser les tests et le déploiement. Ce travail nous aide à enrichir notre application tout en nous initiant aux pratiques professionnelles d'intégration continue et de déploiement continu.

## Objectifs

Améliorer l’application de quiz en ajoutant des fonctionnalités avancées en Vue.js.
Mettre en place un système CI/CD pour automatiser les tests et déployer automatiquement chaque nouvelle version de l’application.

## Partie 1 : Nouvelles Fonctionnalités Vue.js

Ajoutez des fonctionnalités pour enrichir l'expérience utilisateur du quiz et améliorer les fonctionnalités de l'application.
Voici quelques idées :

<ul>
<li>
Gestion des états avec Vuex : Utilisez Vuex pour gérer les données globales de l’application (comme le score de l’utilisateur, le niveau du quiz, ou les questions chargées). Cela permet de centraliser l’état et de simplifier le partage des données entre composants.
</li>

<li>
Système de progression : Ajoutez une barre de progression qui se met à jour en fonction du nombre de questions répondues. Nous pouvons créer une barre animée en temps réel, ce qui améliore le suivi des progrès pour l’utilisateur.
</li>

<li>
Feedback utilisateur : Affichez des notifications ou des messages en temps réel pour indiquer si la réponse est correcte ou incorrecte. Utilisez des animations pour rendre l’expérience plus dynamique.
</li>

<li>
Mode de jeu chronométré : Ajoutez une fonctionnalité de minuterie qui limite le temps pour répondre à chaque question. Cela peut apporter un défi supplémentaire, et nous pouvons gérer cette fonctionnalité avec des composants Vue pour la minuterie et les interactions utilisateur.
</li>

<li>
Classements dynamiques : Implémentez un classement avec les scores des utilisateurs, qui se met à jour à chaque fin de quiz. Nous pouvons utiliser des composants pour afficher les scores les plus élevés, voire intégrer Firebase ou une base de données pour stocker ces scores de manière dynamique.
</li>
</ul>

## Partie 2 : Intégration Continue (CI)

L’objectif de cette étape est de mettre en place un système qui exécute automatiquement des tests pour vérifier la qualité de votre code. Suivez ces recommandations :
Créer un dossier de tests dans votre projet pour organiser les tests de votre application.
Définir des tests pour les nouvelles fonctionnalités ajoutées en Vue.js :
Testez que la gestion des états (comme les scores ou la progression) fonctionne correctement.
S'assurer que la barre de progression réagit aux changements.
Vérifiez que le minuteur fonctionne et se réinitialise pour chaque nouvelle question.
Exécuter les tests à chaque changement :
Configurez un pipeline CI qui lancera automatiquement les tests à chaque modification de notre code. Il est autorisé d'utiliser GitHub Actions pour cette tâche.

## Partie 3 : Déploiement Continu (CD)

La dernière étape consiste à déployer automatiquement notre application dès que les tests sont validés.
Choisir une plateforme de déploiement : Vercel ou GitHub Pages.
Configurer le déploiement automatique : Connectez votre dépôt GitHub à la plateforme de déploiement et activez le déploiement automatique. Désormais, chaque modification validée et poussée entraînera un déploiement.

## Bilan

À la fin de ce TP, nous aurons une application de quiz plus interactive et dynamique, et un pipeline CI/CD configuré pour déployer chaque nouvelle version automatiquement après vérification. Cela apporte à la fois de la valeur ajoutée en termes de fonctionnalités et de la robustesse grâce à l'automatisation du CI/CD.
