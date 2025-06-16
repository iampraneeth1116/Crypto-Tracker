import { doc, setDoc } from "firebase/firestore";
import { db } from "../components/Firebase/firebase";

export const saveItemToWatchlist = async (e, userId, coin) => {
  e.preventDefault();

  try {
    
    const coinRef = doc(db, "users", userId, "watchlist", coin.id);
    await setDoc(coinRef, coin); 

    console.log("Coin added to watchlist");
  } catch (error) {
    console.error("Error adding coin to watchlist:", error);
  }
};
