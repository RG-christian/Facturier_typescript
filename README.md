# 🧾 Facturier – Gestion de Factures avec TypeScript

Bienvenue dans **Facturier**, une application web légère conçue pour gérer des factures de manière locale, avec impression, visualisation dynamique et stockage via le navigateur. Développée en **TypeScript**, cette application utilise des interfaces strictes pour structurer la logique métier.

---

## 📁 Structure du projet

```
Facturier/
│
├── public/               # Contenu web accessible
│   ├── index.html        # Fichier HTML principal
│   ├── script.js         # Script généré à partir de TypeScript
│   ├── classe/           # Scripts JS compilés des classes
│   └── interface/        # Scripts JS compilés des interfaces
│
├── src/                  # Dossier source TypeScript
│   ├── classes/          # Fichiers de logique métier
│   └── interface/        # Interfaces pour structuration du code
│
├── tsconfig.json         # Configuration du compilateur TypeScript
```

---

## 🧱 Fonctionnalités principales

- 💬 **Ajout de factures** via un formulaire dynamique
- 📦 **Stockage local** des données avec `localStorage`
- 🖨️ **Impression automatique** des factures formatées
- 🖼️ **Affichage dynamique** des factures dans le DOM
- 🔄 **Rechargement automatique** des factures stockées

---

## 🧠 Architecture du code

### 🔹 Interfaces (`src/interface`)
- `HasHtmlFormat.ts` : impose `toHtmlFormat()` pour affichage HTML.
- `HasPrint.ts` : impose `print()` pour impression.
- `HasRender.ts` : impose `render()` pour insertion dans le DOM.
- `HasSetItems.ts` : impose `setItems()` pour initialisation de données.

### 🔸 Classes (`src/classes`)
| Fichier         | Description |
|-----------------|-------------|
| `Datas.ts`      | Structure les données d’une facture. |
| `FormInputs.ts` | Gère la récupération des données depuis le formulaire. |
| `Display.ts`    | Affiche dynamiquement les données dans la page. |
| `Storage.ts`    | Sauvegarde et recharge les données depuis le navigateur. |
| `Print.ts`      | Gère le formatage et l’impression du contenu HTML. |

---

## ⚙️ Installation et usage

### 1. Cloner le dépôt
```bash
git clone https://github.com/ton-utilisateur/facturier.git
cd facturier
```

### 2. Compiler les fichiers TypeScript
```bash
tsc
```

### 3. Lancer l'application
Ouvre le fichier `public/index.html` dans ton navigateur.


## ✨ Technologies utilisées

- TypeScript
- HTML / CSS
- JavaScript (compilé)
- `localStorage` API
- `window.print()`



## 📂 Auteur

Développé par : Georges RAPONTCHOMBO   
📧 Contact :georgesrapontchombo22@gmail.com



## 📄 Licence

Ce projet est sous licence MIT – [Voir le fichier LICENSE](LICENSE)
