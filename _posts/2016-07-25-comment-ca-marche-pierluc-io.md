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

Dans ce même esprit d'ouverture, tout le code source de *pierluc.io* est [disponible librement sur
Github](https://github.com/pierluc-io/pierluc.io).

Le site devait répondre aux trois critères suivants:

- **Simple**
- **Rapide**
- **Économique**

Voici donc les outils et services qui sont utilisés afin d'atteindre simultanément ces trois
objectifs.

### Jekyll

Jekyll est un générateur de site statique

### GitHub

contrôle de source

### Docker Cloud

Utilisé en tandem avec GitHub, Docker Cloud est un service permettant le déploiement de conteneurs
Docker sur l'infrastructure de votre choix.

### Azure

Conçu par Microsoft, Azure est une fournisseur de services d'infrastructure infonuagique (appelé en
anglais *infrastructure as a service*, ou *IaaS*) qui offre une panoplie de services incluant
l'équilibrage de charge, l'hébergement de machines virtuelles, du stockage et beaucoup plus.

De plus, le programme [*BizSpark*](https://www.microsoft.com/bizspark/) permet aux entreprises en
démarrage d'obtenir des crédits mensuels pour l'utilisation de ressources Azure &mdash; une façon
économique de découvrir et de tester l'infrastructure offerte par Microsoft.

### Let's Encrypt

Disponible à l’ensemble du public depuis avril 2016, *Let's Encrypt* est une toute nouvelle autorité
de certification qui permet de générer tout à fait gratuitement des certificats SSL/TLS et donc de
sécuriser l'accès aux sites Web. L'objectif de cet organisme à but non lucratif est noble: sécurisé
l'intégralité du Web.

### nginx

terminaison SSL/TLS, proxy et serveur Web

### Cloudflare

réseau de diffusion de contenu (CDN)

### Apex Ping

suivi de disponibilité et performance

---

### Simple? Rapide? Économique? Certainement!

Bien que la configuration initiale de cette suite de logiciels et services ne soit pas
particulièrement simple, les mises à jour subséquentes sont d'une simplicité inégalée: dès que des
modifications sont apportées au site, il suffit de les synchroniser et le tour est joué!

C'est aussi grâce à cette judicieuse configuration que la taille de la page d'accueil a pu être
minimisée et que son temps de chargement complet se situe au-dessous de 500 millisecondes. Deux
métriques importantes qu'il ne faut surtout pas négliger, surtout dans un monde où au-dessus de 50%
de la navigation Internet se fait sur des appareils mobiles et souvent sur un réseau cellulaire.

En plus de ces avantages, cette infrastructure fiable et prouvée comporte un faible coût
d'opération. En effet, le coût d'opération d'une telle installation débute à tout juste 20 $ par
mois et ne nécessite l'achat d'aucune licence logiciel.

Il existe bien sûr plusieurs alternatives à chacun de ces produits et, pour la plupart, il s'agit
simplement d'une question de préférence et de coût. Tous les logiciels ci-haut sont gratuits et, à
part l'infrastructure, tous les services offrent un niveau de tarification gratuit, permettant ainsi
de mettre à le système à l'épreuve avec un investissement minimal tout en évitant de devenir captif
de ces fournisseurs.
