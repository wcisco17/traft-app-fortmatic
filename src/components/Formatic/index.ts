// @ts-ignore
import Fortmatic from "fortmatic";
import Web3 from "web3";

// Required to convert message to Hex
const ethUtil = require("ethereumjs-util");

const fm = new Fortmatic("pk_live_2D2681FCD1C1F5B4");
(window as any).web3 = new Web3(fm.getProvider());

export const login = () => {
  (window as any).web3.eth.getAccounts((error: any, accounts: any) => {
    if (error) throw error;

    const from = accounts[0];
    const msg = ethUtil.bufferToHex(new Buffer("ANY STRING", "utf8"));
    const params = [msg, from];
    const method = "personal_sign";

    (window as any).web3.currentProvider.sendAsync(
      {
        id: 1,
        method,
        params,
        from
      },
      function(error: any, result: any) {
        if (error) throw error;
        console.log(result);
      }
    );
  });
};
