// FaqData.ts 
export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const faqData: FAQItem[] = [
    {
        id: 1,
        question: "Pourquoi signer avec Snackly pour mes vidéos ?",
        answer:
            "Chez Snackly, nous imaginons et réalisons des vidéos optimisées pour vos campagnes médias. Les vidéos sont adaptées à chaque réseau social et à chaque espace de diffusion (Feed, Story, Trueview, Display) en prenant en compte leurs limites et leurs opportunités. Tout simplement, parce qu'on ne communiquera jamais de la même manière sur Instagram Feed que sur une TikTok Ads. C'est ce qui fait notre différence, c'est notre leitmotiv au quotidien :chez Snackly, c’est le média qui dicte la créa !",
    },
    {
        id: 2,
        question: "Dois-je prendre de l’Acting ou du Motion ?",
        answer:
            `Nos deux offres sont pertinentes :

 L’Acting : C'est une solution très performante car elle met souvent en scène des humains. Les vidéos acting s'intègrent donc parfaitement dans l'écosystème vidéo des réseaux sociaux. Cependant, avec l'organisation d'un tournage, la production est plus complexe à mettre en place et donc plus coûteuse.

 Le Motion : Il est quant à lui beaucoup plus "scalable" et simple à activer. Vous avez des assets graphiques (photos, illustrations, vidéos) ? On les adapte pour créer des vidéos parfaitement optimisées à vos campagnes médias en un temps record. Néanmoins, ce format dépend de la qualité inhérente de vos assets. Plus ils sont fournis et beaux, plus la vidéo finale aura d’impact.`
    },
    {
        id: 3,
        question: "Combien de temps en moyenne avant de recevoir mes vidéos ?",
        answer:
            `Tout dépend du pack activé :
 Si vous choisissez l’Acting, le projet durera en moyenne 5 à 6 semaines et vous recevrez toutes vos vidéos clé en main, prêtes à être diffusées dans vos campagnes médias.
Si vous passez par notre pack Motion, nous pourrons aller plus rapidement et vous livrer vos vidéos en 3 à 4 semaines en moyenne.
Le conseil Snackly : Plus nous vous accompagnons sur la durée, plus nos équipes maîtrisent le ton de votre marque, ce qui permet de réduire ces délais. C'est pour cela que Snackly propose aussi des packs annuels.`,
    },
    {
        id: 4,
        question: "Pourquoi j’ai besoin de vidéos dans mes campagnes ?",
        answer:
            "Aujourd’hui, la vidéo concentre 80% de la bande passante du web. C'est le format le plus consommé par vos cibles. De plus, selon TikTok, 80% du ROAS (Retour sur Investissement Publicitaire) de votre campagne média dépend de la créa. Alors, pensez-vous vraiment pouvoir vous passer de ce format pour performer dans vos campagnes en ligne ?",
    },
    {
        id: 5,
        question: "Combien de temps en moyenne avant de recevoir mes vidéos ?",
        answer:
            `Une vidéo chez Snackly coûte entre 1500€ et 2500€. Tout dépend du pack que vous choisissez (acting ou motion) et de la quantité de vidéos que vous commandez.
Notre but est de disrupter le marché de la création de contenus vidéo. La vidéo ne doit pas vous coûter cher, car la plus grosse part de votre budget doit aller dans sa médiatisation afin de maximiser votre trafic et votre conversion.`,
    },
];