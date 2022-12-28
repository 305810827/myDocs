## 定义

ethers.js 库旨在成为一个完整而紧凑的库，用于与以太坊区块链及其生态系统进行交互。它最初是为与[ethers.io](https://ethers.io/)一起使用而设计的，后来扩展为一个更通用的库。

## 常用术语

| 类           | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| **Provider** | Provider（以太坊）是一个为以太坊网络连接提供抽象的类。它提供对区块链及其状态的只读访问。 |
| **Signer**   | 签名者是一个（通常）以某种方式直接或间接访问私钥的类，它可以签署消息和交易以授权网络向您的帐户收取以太币以执行操作。 |
| **Contract** | 合约是一种抽象，表示与以太坊网络上特定合约的连接，因此应用程序可以像使用普通 JavaScript 对象一样使用它。 |

## 使用案例

### **提供者**

提供**者**是对以太坊网络连接的抽象，为标准以太坊节点功能提供简洁、一致的接口。

```javascript
// Web3Provider 包装了一个标准的 Web3 提供程序，这是
// MetaMask 作为 window.ethereum 注入每个页面的内容
const provider = new ethers.providers.Web3Provider(window.ethereum)
 // MetaMask 需要请求权限才能连接用户帐户
await provider .send("eth_requestAccounts", []);
// MetaMask 插件还允许签署交易
// 发送以太币并支付更改区块链内的状态。
// 为此，您需要帐户签名者...
 const signer = provider.getSigner()
```

**查询区块链**

​		一旦你有了一个[Provider](https://docs.ethers.io/v5/api/providers/provider/)，你就有了一个到区块链的只读连接，你可以用它来查询当前状态、获取历史日志、查找部署的代码等等。

```javascript
// 查找当前区块号
await provider.getBlockNumber()
 // 14983200
 
// 获取账户余额（通过地址或 ENS 名称，如果网络支持）
 balance = await provider.getBalance("ethers.eth")
 // { BigNumber: "182826475815887608" }
 
// 通常你需要将输出格式化为对用户更友好的格式，
 // 例如在 ether（而不是 wei）
中 ethers.utils.formatEther(balance)
 // '0.182826475815887608'
 
/ / 如果用户在输入字段中输入字符串，您可能需要
// 将其从 ether（作为字符串）转换为 wei（作为 BigNumber）
 ethers.utils.parseEther("1.0")
 // { BigNumber: " 1000000000000000000" }
```



### 签名者

以太坊中的**签名者**是*以太*坊账户的抽象，可用于对消息和交易进行签名，并将签名的交易发送到以太坊网络以执行状态更改操作。

```javascript
// 向一个 ens 名称发送 1 个以太币。
const tx = signer.sendTransaction({ to: "ricmoo.firefly.eth", value: ethers.utils.parseEther("1.0") });
```



### 合同

**合约**对象是部署在以太坊网络上的合约（EVM 字节码）的抽象。它允许以一种简单的方式将调用和交易序列化到链上合约，并反序列化它们的结果和发出的日志。

[Contract](https://docs.ethers.io/v5/api/contract/contract/)对象使您可以更轻松地将链上 Contract 用作普通 JavaScript 对象，并将方法映射到为您编码和解码数据。

如果您熟悉数据库，这类似于*对象关系映射器*(ORM)。

为了与链上的合约进行通信，这个类需要知道有哪些方法可用以及如何对数据进行编码和解码，这就是*应用程序二进制接口*（ABI）提供的。

这个类是一个*元类*，这意味着它的方法是在运行时构造的，当你将 ABI 传递给构造函数时，它使用它来确定要添加哪些方法。

虽然链上合约可能有许多可用的方法，但您可以放心地忽略任何您不需要或不使用的方法，为合约提供 ABI 的较小子集。

ABI 通常来自 Solidity 或 Vyper 编译器，但您可以在代码中使用 Human-Readable ABI，以下示例将使用该 ABI。

```javascript
// 您也可以使用 ENS 名称作为合约地址
const daiAddress = "dai.tokens.ethers.eth";

// ERC-20 Contract ABI，这是一个通用的合约接口
// 用于代币（这是人类可读的 ABI 格式）
 const daiAbi = [
   // 关于代币的一些细节
  "function name() view returns (string) ", "function symbol() view returns (string)",

   // 获取账户余额
  "function balanceOf(address) view returns (uint)",

   // 将你的一些代币发送给其他人
  "function transfer(address to, uint amount)",

   // 每当有人向其他人转账时触发的事件
  "event Transfer(address indexed from,

// 合约对象
const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
```

