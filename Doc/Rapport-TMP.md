sur un sujet donnée. La différence avec les votations normales est qu'elle ne se se limite pas à un 3 valeurs (pour, contre, neutre). Elles se décrivent plus comment un jugement de valeur entre 2 intervalles. 
Donc une votation géolocalisé se définit comme un jugement de valeurs **sur une caractéristique** d'une position sur Terre à un moment **T**. Par soucis d'équités et de consistences, toutes ces votations ont le même poids à un moment T=0. Peut importe de qui et d'ou provient la votation. Par la suite, elle sont pondérée par le temps qui réduit ou augmente l'impacte  de celles-ci jusqu'à une date """depérissement""". J'ai pris cette décision car une votation est totalement subjective et émise à un temps donné. Il est donc normal qu'une votation plus ancienne	 soit 

- Une valeur """inclu dans R """. Cette valeur  V représente un avis subjectif d'un utilisateur dans le domaine donné. Toutes les votations ont la même importance.
- Une position GPS latitude longitude
- Une distance de portée.
- Une date de validité.



En synthétisant, une votation géolocalisé réponds aux axiomes suivants:

- Chacune des votations sont associées à une instance qui définit le sujet d'une votation (P.E. la propreté)
- Chacune des votations ont une portées (distance en mètres).
- La valeur d'une votation est compris dans un ensemble de valeur fini inclus dans **R strictement positif**. Je considère la valeur 0 comme absence de vote.
- Elle est émise à un temps T=0.
- Toutes votations ont un même temps de validité et une fonction de pondération basée sur le temps.
- La valeur d'une votation ne change pas (P.E. un 4/5 restera toujours à cette valeur).
- Tout utilisateur est éligible à émettre une votation.
- Une votation d'un utilisateur sera remplacée si celui-ci en émet une nouvelle à la même position (ou très proche).
- Toutes les votations sont prise en compte et ont leur importance tant qu'elles sont valides.
- Si plusieurs votations se superposent, c'est la valeur résultante est la moyenne pondéré de celle-ci.





\section{Introduction}



\section{Etat de l'art}

Il existe déjà pleins de fournisseur de données

Les cartes existent déjà (open-street map) -> chargement chunk par chunck

Il existes de nombreuses librairies JS pour dessiner, mais peu correspondent à ce que je veux faire ou sont trop complexes.

Inspiration du modèle react-leaflet-heatmap 



\section{Planification}





\section{Infrastructure}

\subsection{séparation des fonctionnalités}

Le projet offre deux branches de fonctionnalités:

- La première étant de pouvoir créer des instances de votations et des les paramétrer (initialisation et paramétrage). C'est à moi de fournir une interface pour pouvoir interagie. Il faut que personne puisse accéder au fonctionnalités offertes sans passer par l'interface fournie.
- La seconde est de pouvoir populer ces instances avec des votations (utilisation). C'est au créateur de l'instance de créer l'interface correspondante.

De ces fait, 2 infrastructures ont été imaginées:

Infrastructure Rest

Cela consiste à créer une infrastructure Rest en utilisant Django Play Framework. Il y aura des endpoints "publique" que les créateurs d'instance pourront utiliser en fournissant une clé publique. Cette clé publique référence leur instance et permettra de populer leur table de votations.
De plus, il y aura des endpoints "privé" qui permettront interagir avec les







Backend en Django car Arcanite utilise ça.

Django est un full stack Framework pour faire du développement web. Il a une interface en Python et a une grande communauté derrière lui. L'architecture de Django se présente comme un \tiltModel-Template-View (MTV) } Il est possible de faire une API Rest avec Django soit en utilisant Django Rest Framework, soit en codant manuellement les endpoint est les seriealizer.

Pour la partie 1, il est nécessaire de 



Deux architectures principales possibles possible:

Full-Stack:



Hybride: Interface 