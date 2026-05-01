# 🎓 UETTO-HUB

**Plateforme de la Communauté Tchadienne Étudiante à Tokat**

## 📚 À propos

UETTO-HUB est une plateforme numérique créée pour rassembler, organiser et soutenir tous les étudiants tchadiens étudiant à Tokat, en Turquie.

## 🌟 Fonctionnalités

### 🔓 Partie Publique
- **Accueil**: Présentation de la communauté
- **Guide**: Informations complètes pour les nouveaux étudiants
- **Projets**: Vitrine des réalisations de l'association
- **Contact**: Formulaire de contact et d'inscription

### 🔐 Partie Privée (Authentifiée)
- **Annuaire**: Base de données des étudiants avec filtres
- **Ressources**: Cours, documents et matériels pédagogiques
- **Tableau de Bord**: Hub central pour les utilisateurs authentifiés
- **Admin Panel**: Gestion des étudiants, ressources et projets (admin uniquement)

## 🔑 Accès

### Utilisateur Standard
- **Mot de passe**: `uetto2026`
- Accès: Annuaire + Ressources + Tableau de Bord

### Admin
- **Mot de passe Admin**: `admin123`
- Accès: Panel d'administration complet

## 📁 Structure du Projet

```
UETTO-HUB/
├── index.html              (Accueil)
├── guide.html              (Guide pour nouveaux)
├── projets.html            (Projets & activités)
├── contact.html            (Contact)
├── login.html              (Page de connexion)
├── dashboard.html          (Tableau de bord)
├── annuaire.html           (Annuaire étudiants)
├── ressources.html         (Ressources pédagogiques)
├── admin.html              (Panel admin)
├── css/
│   └── style.css          (Feuille de styles)
├── js/
│   └── main.js            (JavaScript principal)
├── data/
│   ├── students.json      (Données étudiants)
│   ├── resources.json     (Données ressources)
│   ├── projects.json      (Données projets)
│   └── config.json        (Configuration)
├── assets/
│   ├── images/            (Photos)
│   └── documents/         (PDFs, fichiers)
└── README.md
```

## 🚀 Déploiement sur GitHub Pages

1. **Créer un repository GitHub**: `UETTO-HUB`
2. **Pousser le code**:
   ```bash
   git add .
   git commit -m 'Initial commit: UETTO-HUB platform'
   git push origin main
   ```
3. **Activer GitHub Pages**:
   - Aller à Settings → Pages
   - Source: main branch
   - Votre site sera disponible à: `https://DaoulaFaical.github.io/UETTO-HUB`

## 📝 Comment Ajouter des Données

### Ajouter des Étudiants

1. **Via Admin Panel** (Recommandé):
   - Aller à `admin.html` après connexion
   - Entrer le mot de passe admin: `admin123`
   - Remplir le formulaire et soumettre

2. **Manuellement** (fichier JSON):
   - Éditer `data/students.json`
   - Ajouter un nouvel objet étudiant:
   ```json
   {
     "id": 3,
     "nom": "Prénom Nom",
     "universite": "Université",
     "filiere": "Filière",
     "annee": "Année",
     "email": "email@example.com",
     "telephone": "+216 XXXXXXXXX",
     "photo": "assets/images/photo.jpg",
     "showPrivate": true/false
   }
   ```

### Ajouter des Ressources

1. **Via Admin Panel**: 
   - Aller à l'onglet "Ressources"
   - Remplir le formulaire

2. **Manuellement**: Éditer `data/resources.json`

### Ajouter des Projets

1. **Via Admin Panel**:
   - Aller à l'onglet "Projets"
   - Remplir le formulaire

2. **Manuellement**: Éditer `data/projects.json`

### Ajouter des Fichiers Média

1. Créer le dossier s'il n'existe pas: `assets/images/` ou `assets/documents/`
2. Ajouter le fichier via GitHub (Upload)
3. Référencer le chemin dans le JSON: `assets/images/photo.jpg`

## 🎨 Personnalisation

### Couleurs
Dans `css/style.css`, modifier les variables CSS:
```css
:root {
    --primary: #2563EB;        /* Bleu principal */
    --accent: #F97316;         /* Orange accent */
    /* ... */
}
```

### Textes
Éditer directement les fichiers HTML

## 🔒 Sécurité

⚠️ **Note**: Les mots de passe sont stockés en **texte clair** dans le code (stockage côté client).
Ce système est suffisant pour une plateforme GitHub Pages simple mais **non recommandé** pour des données sensibles.

Pour plus de sécurité, considérez un backend avec base de données.

## 📞 Support

- **Email**: contact@uettohub.com
- **Localisation**: Tokat, Turquie

## 📄 Licence

Ce projet est ouvert à la communauté tchadienne étudiante à Tokat.

---

**Créé avec ❤️ pour la communauté tchadienne**

Version 1.0 - Mai 2026