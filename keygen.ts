import { Keypair } from "@solana/web3.js";
// import bs58 from "bs58";
// import * as prompt from "prompt-sync";

let kp = Keypair.generate();

console.log(
  `You've generated a new Solana wallet: ${kp.publicKey.toBase58()} [${
    kp.secretKey
  }]`
);

// fn base58_to_wallet() {
//     println!("Enter your name:");
//     let stdin = io::stdin();
//     let base58 = stdin.lock().lines().next().unwrap().unwrap(); // gdtKSTXYULQNx87fdD3YgXkzVeyFeqwtxHm6WdEb5a9YJRnHse7GQr7t5pbepsyvUCk7VvksUGhPt4SZ8JHVSkt
//     let wallet = bs58::decode(base58).into_vec().unwrap();
//     println!("{:?}", wallet);
// }

// Public key: CJuszqJEUCggfwKsKaK4m7f6mbChGoXaUxMknc5vsFq2
