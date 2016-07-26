---
layout: post
title: "Comment ça marche : pierluc.io"
timeline_image: /pierluc-logo.png
categories:
  - Technologie
  - Web
  - Performance
excerpt: >
  Oh la la
og_image: /opengraph.png
comments: yes
share: yes
---

Le site Web sur lequel vous vous trouvez est une simple page statique et surtout une vitrine
technologique offrant une architecture dernier cri.

### Simple, rapide et économique? Certainement!

Sans être particulièrement ardue, la configuration initiale de cette suite de logiciels et services
n'est pas exactement simple non plus. Par contre, la maintenance à court, moyen et long terme est
d'une simplicité inégalée! En effet, dès que des modifications sont apportées au site, il suffit
d'appuyer sur un bouton pour synchroniser les mises à jour et le tour est joué!

C'est aussi grâce à cette judicieuse configuration que la taille de la page d'accueil a pu être
minimisée et que son temps de chargement complet se situe au-dessous de 500 millisecondes. Deux
métriques importantes qu'il ne faut surtout pas négliger, surtout dans un monde où plus de 50% de la
navigation Internet se fait sur des appareils mobiles et souvent sur un réseau cellulaire.

En plus de ces avantages, cette infrastructure est fiable, prouvée et peu coûteuse &mdash; le coût
d'opération d'une telle installation débute à moins de 20 $ par mois et ne nécessite l'achat
d'aucune licence logiciel.

Voici donc les outils et services qui sont utilisés afin d'atteindre simultanément ces trois
objectifs.

### Jekyll

Les générateurs de site statique comme Jekyll offrent un avantage important face aux plateformes de
blogue comme WordPress ou Joomla: ils ne nécessitent pas l'installation d'une base de données et
d'un système de sauvegarde complexe. Étant simplement composé de fichiers textes, Jekyll est un
retour aux souches, avec une approche moderne au développement Web.

> La maintenance du site Web se fait exclusivement avec Jekyll, tous les autres logiciels et
services sont dans la catégorie *configurer et oublier*.

### GitHub

GitHub offre un système de contrôle de source, un terme chic qui, à sa plus simple expression,
permet de maintenir automatiquement une copie de sauvegarde de toutes les versions du site ou d'une
application Web.

### Docker Cloud

Utilisé en tandem avec GitHub, Docker Cloud est un service permettant le déploiement du site à
l'intérieur de conteneurs Docker. Sans pour l'instant entrer dans les détails, cette technologie
permet de publier sur l'infrastructure de votre choix et de changer de fournisseur litérallement en
quelques minutes.

### Azure

Conçu par Microsoft, Azure est une fournisseur de services d'infrastructure infonuagique (appelé en
anglais *infrastructure as a service*, ou *IaaS*) qui offre une panoplie de services incluant
l'équilibrage de charge, l'hébergement de machines virtuelles, du stockage et beaucoup plus.

> Le programme [*BizSpark*](https://www.microsoft.com/bizspark/) permet aux entreprises en démarrage
d'obtenir des crédits mensuels pour l'utilisation de ressources Azure &mdash; une façon économique
de découvrir et de tester l'infrastructure offerte par Microsoft.

### Let's Encrypt

Disponible à l’ensemble du public depuis avril 2016, *Let's Encrypt* est une toute nouvelle autorité
de certification qui permet de générer tout à fait gratuitement des certificats SSL/TLS et donc de
sécuriser l'accès aux sites Web. L'objectif de cet organisme à but non lucratif est noble: sécurisé
l'intégralité du Web.

### nginx

Le coeur de ce site terminaison SSL/TLS, proxy et serveur Web

### Cloudflare

En plus d'être un des réseaux de diffusion de contenu (appelé en anglais *content delivery network*,
ou *CDN*) le plus populaire sur la planète, Cloudflare offre aussi un service de résolution de nom
de domaine (*domain name system*, ou *DNS*).

### Apex Ping

Un outil trop souvent oublié, Apex Ping effectue le suivi de disponibilité et de performance du
site. Il permet de visualiser, en temps réel, le temps de réponse du site et de recevoir une alerte
dès qu'une erreur se produit.

> Il existe bien sûr plusieurs alternatives à chacun de ces produits et, pour la plupart, il s'agit
simplement d'une question de préférence et de coût. Tous les logiciels ci-haut sont gratuits et, à
part l'infrastructure, tous les services offrent un niveau de tarification gratuit, permettant ainsi
de mettre à le système à l'épreuve avec un investissement minimal tout en évitant de devenir captif
de ces fournisseurs.

Dans ce même esprit d'ouverture, tout le code source de *pierluc.io* est [disponible librement sur
Github](https://github.com/pierluc-io/pierluc.io)
