# [![logo](https://www.pierluc.io/images/logo-light-alpha-40x40.png)](https://www.pierluc.io/) pierluc.io

## Développement

1. Installer [Ruby 2.3.x (x64)](http://rubyinstaller.org/downloads/)
2. Télécharger [Ruby Development Kit](http://rubyinstaller.org/downloads/) et [configurer](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit)
3. Exécuter la commande suivante : `gem install jekyll wdm`
4. Cloner le dépôt et exécuter `jekyll serve`

Le site sera disponible à l'adresse suivante: `http://localhost:4000`

## Déploiement et infrastucture

Bien qu'il existe une panoplie d'options pour déployer un site statique, elles sont généralement simple puisqu'il n'est pas nécessaire d'installer de logiciels supplémentaires -- ce ne sont que des fichiers HTML, CSS et JS.

Pour `https://www.pierluc.io`, j'utilise les logiciels et services suivants :

1. **GitHub** - contrôle de source
2. **Docker Cloud** - mise à jour et déploiement automatique de conteneurs lorsque le dépôt est modifier
3. **Azure** - équilibrage de charge, machines virtuelles et stockage
4. **Let's Encrypt** - émetteur de certificats SSL/TLS gratuits
5. **nginx** - terminaison SSL/TLS, proxy et serveur Web
6. **Cloudflare** - réseau de diffusion de contenu (CDN)
7. **Apex Ping** - suivi de disponibilité et performance

## Licence

Copyright 2016 Pier-Luc Gendreau
