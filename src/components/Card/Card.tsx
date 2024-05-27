// Types
import { CardType } from '../../setup';
import React from "react";

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
};

const Card: React.FC<Props> = ({ card, callback }) => {
  return <div>Card</div>;
};

export default Card;