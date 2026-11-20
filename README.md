# FixConnect — Remote Desktop & Support Platform (UI Interface)

Interface web moderne, ultra-rapide et responsive pour la plateforme de support et d'accès à distance **FixConnect**, conçue d'après vos maquettes avec le nouveau logo FixConnect et sans base de données (100% Client-Side State).

---

## 🚀 Comment lancer et ouvrir le site

### Option 1 : Directement dans votre navigateur (Le plus rapide)
Double-cliquez simplement sur le fichier **`index.html`** ou ouvrez-le avec votre navigateur préféré (Google Chrome, Microsoft Edge, Firefox, Safari).

### Option 2 : Via le serveur Node.js inclus (Sans dépendances)
Ouvrez un terminal dans le dossier `FixConnect` et exécutez :
```bash
node server.js
```
Puis ouvrez votre navigateur sur :
👉 **`http://localhost:3000`**

---

## 🎨 Fonctionnalités & Écrans inclus

Grâce au sélecteur universel en haut de l'écran, vous pouvez naviguer instantanément entre tous les designs :

1. **🌐 Landing Page (`fixconnect.com`)** :
   - Header avec le logo officiel FixConnect, navigation (*Home, Features, How It Works, About, Login, Get Started*).
   - Hero Section : *"Remote Support. Made Simple."* avec mockup interactif de session à distance.
   - Grille de 6 fonctionnalités clés : *Remote Desktop Control, Secure Connections, File Transfer, Real-Time Support, Device Management, Live Chat*.
   - Guide en 3 étapes : *"Getting started takes less than a minute"*.
   - Footer complet avec liens et mentions.

2. **💻 Devices / Dashboard Home** :
   - Barre de connexion rapide (*Quick Connect*) avec champ Device ID et bouton `Connect`.
   - Table complète **Your Devices** (DESKTOP-7F3KQ9, PC-BERKANE, LAPTOP-USER) avec statuts En ligne/Hors ligne.
   - Table **Recent Sessions** avec durées et raccourcis.
   - Widget **Current Session** avec prévisualisation active et notification de sécurité.

3. **⏱️ Sessions** :
   - Carte **Active Session** en direct (MacBook Pro M3 Max) avec **chronomètre en temps réel**.
   - Boutons d'actions : `View Session` (lance l'accès à distance interactif) et `End`.
   - Table **Session History** avec filtres par statut, filtre par date, recherche et pagination.
   - Boutons `Export Logs` et `+ New Connection`.

4. **📜 Activity & Logs** :
   - Journal d'audit chronologique détaillé de tous les événements de sécurité et de connexion.
   - Badges de statut réactifs (*Success, Registered, Declined, Completed, Applied, Timeout*).
   - Bouton **Export CSV fonctionnel** (télécharge un vrai fichier `.csv`).
   - Recherche en direct et filtres par période.

5. **⚙️ Settings** :
   - **Profile & Account** : Avatar de Yassine Zekhnini, nom complet, email `@fixconnect.com`, téléphone.
   - **Security & Privacy** : Mot de passe, 2FA Google Authenticator activé, gestion des sessions actives.
   - **Integrations & API** : Statuts Google Calendar, Slack, Trello, et tableau de clés API avec options de copie, révocation et création de nouvelle clé.
   - **Advanced & Team** : Notifications cochables, sélecteur de thème (Light / Dark / System), gestion d'équipe.
   - Boutons `Save Changes` (avec toast de confirmation) et `Export Configuration` (télécharge le fichier `.json`).

6. **🖥️ Live Remote Session (Simulation Windows 11 PC-BERKANE)** :
   - Écran de bureau Windows 11 avec fond Bloom authentique.
   - **Menu Démarrer interactif** : Cliquez sur le logo Windows dans la barre des tâches pour ouvrir et fermer le vrai menu Démarrer avec la liste des applications !
   - Icônes de bureau cliquables (*This PC, Recycle Bin, Chrome*).
   - Barre d'outils flottante de contrôle à distance : *Mouse, Keyboard, 95% Resolution, Display, Fullscreen, Clipboard sync, File transfer, Screenshot snapshot*.
   - Volet latéral droit :
     - Informations sur l'appareil distant (PC-BERKANE, Windows 11 Pro, ID FC-902-134, 1920x1080, Qualité Excellente).
     - Durée de session en direct (chronomètre dynamique).
     - **File Transfer Panel** : Suivi des transferts en cours avec barre de progression animée et zone *Drag & Drop* pour tester l'envoi de fichiers réels.
     - **Remote Chat Panel** : Messagerie instantanée en direct entre le technicien (Yassine Z.) et l'utilisateur distant, avec réponses simulées automatiques.

7. **🌙 Mode Sombre / Clair** :
   - Bouton de bascule Dark/Light intégré dans la barre supérieure et dans les paramètres.

---

## 📁 Structure du projet

```
FixConnect/
├── index.html                 # Point d'entrée de l'application SPA
├── server.js                  # Serveur local léger sans dépendance
├── README.md                  # Documentation du projet
└── assets/
    ├── css/
    │   └── style.css          # Design system complet, tokens, animations
    ├── js/
    │   ├── app.js             # Routeur, gestion d'état réactive, interactions
    │   ├── data/
    │   │   └── mockData.js    # Données mockées (appareils, logs, sessions, user)
    │   └── components/
    │       ├── navbar.js      # Barre supérieure, switcher et menu latéral
    │       ├── landing.js     # Page d'accueil commerciale FixConnect
    │       ├── devices.js     # Tableau de bord Devices & Quick Connect
    │       ├── sessions.js    # Gestion des sessions actives et historiques
    │       ├── activity.js    # Journal d'activité avec export CSV
    │       ├── settings.js    # Paramètres du compte et clés API
    │       └── remote.js      # Simulation interactive de session distante
    └── images/
        ├── fixconnect-logo.png         # Nouveau logo FixConnect (transparent sombre)
        ├── fixconnect-logo-white.png   # Nouveau logo FixConnect (transparent blanc)
        ├── fixconnect-icon.png         # Icône FixConnect isolée
        ├── user-avatar.png             # Photo de profil de Yassine Zekhnini
        └── win11-remote-screen.jpg     # Capture du bureau Windows 11
```
