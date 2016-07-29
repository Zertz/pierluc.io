---
layout: post
title: "Comment ça marche : pierluc.io"
timeline_image: /pierluc-logo.png
categories:
  - Technologie
  - Web
  - Performance
excerpt: >
  Découvrez les technologies derrière ce site, bâti sur une architecture dernier cri permettant
  d’offrir la meilleure expérience utilisateur possible, tant sur l'ordinateur que sur les appareils
  mobiles.
og_image: /opengraph.png
comments: yes
share: yes
---

Le site Web sur lequel vous vous trouvez est une simple page statique, pas de base de données, juste
quelques lignes de code, comme dans le bon vieux temps! C'est aussi une vitrine technologique: une
architecture dernier cri permettant d'offrir la meilleure expérience utilisateur possible, une
expérience simple et rapide tant sur l'ordinateur que sur les appareils mobiles.

### Simple, rapide et économique? Certainement!

Bien que la configuration initiale de cette suite de logiciels et services implique une certaine
complexité, la maintenance à court, moyen et long terme est d'une simplicité inégalée! En effet, dès
que des modifications sont apportées au site, il suffit d'appuyer sur un bouton pour synchroniser
les mises à jour et le tour est joué!

C'est aussi grâce à cette judicieuse configuration que la taille de la page d'accueil a pu être
minimisée et que son temps de chargement complet se situe au-dessous de 500 millisecondes. Deux
métriques importantes qu'il ne faut surtout pas négliger, surtout dans un monde où plus de 50% de la
navigation Internet se fait sur des appareils mobiles et souvent à travers un réseau cellulaire.

En plus de ces avantages, cette infrastructure est fiable, prouvée et peu coûteuse &mdash; le coût
d'opération d'une telle installation débute à moins de 20 $ par mois et ne nécessite l'achat
d'aucune licence logiciel.

Voici donc les outils et services qui sont utilisés afin d'atteindre simultanément ces trois
objectifs.

### Jekyll

Les générateurs de site statique comme Jekyll offrent quelques avantages importants face aux
plateformes de blogue comme WordPress: ils sont très rapide et ne nécessitent pas l'installation
d'une base de données ni d'un système de sauvegarde complexe. Étant simplement composé de quelques
fichiers textes, Jekyll est un retour aux souches, avec une approche moderne au développement Web.

> La maintenance du site se fait exclusivement avec Jekyll, tous les autres logiciels et services
sont dans la catégorie *configurer et oublier*.

### GitHub

GitHub offre un système de contrôle de source, un terme chic qui, à sa plus simple expression,
permet de maintenir automatiquement une copie de sauvegarde de toutes les versions du site ou d'une
application Web. Il n'est donc pas nécessaire de configurer une sauvegarde ou même de conserver une
copie du site sur votre ordinateur.

### Docker Cloud

Utilisé en tandem avec GitHub, Docker Cloud est un service permettant le déploiement du site à
l'intérieur de conteneurs Docker. Sans pour l'instant entrer dans les détails, cette technologie
permet de publier votre site sur l'infrastructure de votre choix et de changer de fournisseur
litérallement en quelques minutes. Fini les problèmes d'hébergement Web!

### Azure

Conçu par Microsoft, Azure est une fournisseur de services d'infrastructure infonuagique (appelé en
anglais *infrastructure as a service*, ou *IaaS*) qui offre une panoplie de services incluant
l'équilibrage de charge, l'hébergement de machines virtuelles, du stockage et beaucoup plus. Bien
que ce type de service soit légèrement plus coûteux que les hébergeurs traditionnels, la fiabilité
est grandement supérieure.

> Le programme [*BizSpark*](https://www.microsoft.com/bizspark/) permet aux entreprises en démarrage
d'obtenir des crédits mensuels pour l'utilisation de ressources Azure &mdash; une façon économique
de découvrir et de tester l'infrastructure offerte par Microsoft.

### Let's Encrypt

Disponible à l’ensemble du public depuis avril 2016, *Let's Encrypt* est une toute nouvelle autorité
de certification qui permet de générer tout à fait gratuitement des certificats SSL/TLS et donc de
sécuriser l'accès aux sites Web. Même s'il n'y a pas de transactions financières sur votre site, vos
utilisateurs peuvent quand même être vulnérables à de multiples failles de sécurité. C'est pourquoi
l'objectif de cet organisme à but non lucratif, soit de sécurisé l'intégralité du Web, est non
seulement noble, mais aussi important.

### nginx

Le coeur du site, nginx (prononcé *engine-x*) est un serveur Web gratuit utilisé par près de 150
millions de sites à travers le monde. Son travail est « simplement » d'envoyer la bonne page
lorsqu'un visiteur arrive sur votre site Internet.

### Cloudflare

En plus d'être un des réseaux de diffusion de contenu (appelé en anglais *content delivery network*,
ou *CDN*) le plus populaire sur la planète et un service de résolution de nom de domaine (*domain
name system*, ou *DNS*), Cloudflare peut aussi conserver une copie de votre site en cache.
L'avantage immédiat du produit est d'améliorer la performance du site et de supporter aisément un
grand nombre de visiteurs simultanés.

### Apex Ping

Un outil trop souvent oublié, Apex Ping effectue automatiquement le suivi de disponibilité et de
performance du site. Il permet de visualiser, en temps réel, le temps de réponse du site et de
recevoir une alerte dès qu'une erreur se produit. Si une panne se produit, vous, et non vos clients,
serez donc les premiers à l'apprendre.

---

Voilà donc, sommairement, les technologies impliquées dans ce site Web. Il existe bien sûr plusieurs
alternatives à chacun de ces produits et, pour la plupart, il s'agit simplement d'une question de
préférence et de coût. Tous les logiciels ci-haut sont gratuits et, à part l'infrastructure, tous
les services offrent un niveau de tarification gratuit, permettant ainsi de mettre à le système à
l'épreuve avec un investissement minimal tout en évitant de devenir captif de ces fournisseurs.

> Pour les plus curieux, c'est dans ce même esprit d'ouverture que tout le code source de
*pierluc.io* est [publié librement sur Github](https://github.com/pierluc-io/pierluc.io).
