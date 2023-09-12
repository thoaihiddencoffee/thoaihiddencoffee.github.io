'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "2a656e2f144238470506d20b83430ef5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "39cdec0c1c9773b1ef6b5948152d5a7a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "abab2525b56ee6bfcc20503cc2c64290",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0751dd0dfaeaf777ef23d64841ba6be3",
".git/logs/refs/heads/main": "0751dd0dfaeaf777ef23d64841ba6be3",
".git/logs/refs/remotes/origin/HEAD": "8cba2d685d5c7c200918cdcfd9d8a8ff",
".git/logs/refs/remotes/origin/main": "531c709767dc26531861180ac0df304b",
".git/objects/01/0732faecb29b15b6ca84bce28a40cad33cdb32": "e0a26c5e90fd0029f84e749b73152e0c",
".git/objects/01/a91d0276319c0e185c88f5981f41acb902c03d": "9858de4244550999ddc3f245dc8119ab",
".git/objects/03/ef4023dfbc3720beba2f3cc87fbc1a7c665e38": "2686e097819bbfe45dedb8050da0f19f",
".git/objects/04/dc42886d00e13ffd6ca97635bfa2ca526a8397": "8225c65ad0a8773231c6ebd3547475a6",
".git/objects/05/8fe896c04c94f6a1b602c89ece54bca8c01621": "2c90489fd3c64748fc1dd9f438783dac",
".git/objects/07/5387d6a13613df829954fd21bb749db180f362": "bbeb37c8a4b5e920a9cd772f6dbdd0c2",
".git/objects/0b/8f80a05f8d0ab510ca0a75a2d121265a848a6b": "12af4c97abf9c8abc3e8649fc1f9caaa",
".git/objects/0b/ed709a7d28eb22c1cca4ea0f0aa9b567d96f91": "e07018afb1c7eb738a4ff9ce91159ac2",
".git/objects/0c/3a6e4a2ef7a766f7ac710586fc07c30bc7c87b": "1d965612cfc66d1c0c711e8ce856c570",
".git/objects/10/f39d725e6ee4136a6d71474e6483df1a59ae02": "afd49ee5ce450836f70e057e3a726b6e",
".git/objects/11/e5b9e09bc338c634d38bceb2ff277ae3942d09": "b64f143e6e86a66123bdcf759893fd91",
".git/objects/15/360016d74ace34ed8fb4bbff7216c4e229e51a": "1db36c67fb8cda78050ccb87b10aa7d1",
".git/objects/15/78a420495b53314d37dc287782259b29fe8dcc": "f02bf8f9b2a3de449ec214a9f8dcc985",
".git/objects/16/f56ce350ce0b922de53031205a57e053bfadca": "f468505ae510a422279a646dbdc2da83",
".git/objects/17/1a6d43ab9452770255abe1e5ebe15aa367aa6d": "399b646e811d552a3000f81c19daadf0",
".git/objects/17/a4ca7c6602f65e1aeca213122c0115c69bbd32": "bc23b4b83c2a75051ae94763fcbd0241",
".git/objects/19/8549692829f18da43fb0d616ff16474ab6b99f": "58524185b0f13a770c9f2bf028a91d97",
".git/objects/1a/e9662c895fff0a22efce56776344cf7942e939": "9051d18f05a671cc0b39a096e935a34b",
".git/objects/1d/f1a4d295a09407022201d9a048b56112f6f7e6": "6260a31c83dd45f1cf371675217321a8",
".git/objects/1e/afc8724470ff2361da08107c925711779c9ef9": "43bf45dcc1e822c0df850471e66e5c67",
".git/objects/25/9803ed98baf4774dca90c766f85b7e8a1eabb3": "840b065eecbff2c02af34467a4559e29",
".git/objects/26/e7929c2e188e8aa6c2473e9ce930851ae78de3": "dc9b94bbe14e99674da7130d554fc6b0",
".git/objects/2a/94343d9a19c2dbb5d9745bb00e926de642cc79": "88431bb29864904c5cdb15b91fa815df",
".git/objects/2c/a03ee4647443f3e99e03560a993556eae8600d": "b47e7f2b6488ed31e6551456c01a4d32",
".git/objects/2d/f414597d6f2ed83dde0ed7b40615298348c553": "cbc44f8051491a6eea1db24d8cc5bc16",
".git/objects/2e/ac99b6a2c9a48517eda5b6f5dce7e4eec3fe1e": "70a11401bfb9e0d9b63e847b723f89a0",
".git/objects/2e/edce297a894048719e14a329a3bfb63ea4d654": "2754ef4f3ce8754174585c4435bb10fb",
".git/objects/30/8f5d829c57f86ff0f792e70645d01b9203bd73": "185b2835bd0c444ca619b003de1b2647",
".git/objects/32/302d6677a87dac17b074f59b9848e26fa7af44": "2c6bfeca93f1359869af860ac66a4dd3",
".git/objects/33/04aaf9637c53ca1af410088d31572261288112": "6b7795d0d496ff54fbf48014639f53e9",
".git/objects/33/197cff1e392f541a7445a7ca4f1c488eb412d1": "73e8154c6f0f37a95b9c66e596e22055",
".git/objects/33/485f6f3f5c923f003deb6b4025ba8767b45ca5": "645838ea159fb0b41a9c5bcc25c64163",
".git/objects/34/34910783b57ffb6698241407d5af7488e1a55d": "0261bcb23bcccfc4ac77df9cb4b72b86",
".git/objects/36/9eae9f17ce7b7a5fcd271bf1f38489b6e52d8c": "22e9b838b65a4222b173f1f12aa256dd",
".git/objects/38/7dbb4500176ffde38769bce15deeb0df07d845": "7ada6411b7640ebfce2914d038384acc",
".git/objects/39/b253a9770d929d784a0b0f66a685795b5b5fa9": "439a7c81421ce2aee41fd2a2a6807d54",
".git/objects/3e/8c1a2e5c614785f5caa6d3ff5e6979e1188ece": "f9a90c9975a6b29468c30f0580362e08",
".git/objects/3e/b4022395f5d9865fc89415df52139821de1f97": "e00c144b67460675902c536e0bbf5791",
".git/objects/3e/f0a82e8659fd96907ff8e0e59fd6df7c07e545": "cb9ce135513a8e78651e8e6f810a2608",
".git/objects/41/4e6935c64734ebe23d3a187044440d14c6f115": "a93fa96f331b036f9d79b443f217785f",
".git/objects/41/fbe8bef46c21ae49619eb1454f264ae5026153": "d477c7668a542bfa9c1f108990c389a2",
".git/objects/46/b0e6fc183cb3753c1edc2b1b18adb9988a113b": "f34e1637771dd4966639cbe1439196b3",
".git/objects/49/2226997f2c51f544cb2e925b11be2dd26df6a7": "9141376337bae6288ff825da9b17a8b6",
".git/objects/4a/80a618741ae34a4afed170a069064a6285c6ec": "080cf02431b0de2693b2e75372a28479",
".git/objects/4b/c978ab7ed5fb9392ef432a008bd1929c5422bc": "4e6db9e317d20a23f108f41e42d92357",
".git/objects/4c/ebea7262819f99dc2cd8ce0e83ab81aae776ff": "395af21aa7502222306b2582e9640427",
".git/objects/4d/f83708e20aebc27773d686aeb67506f86a134a": "46d74cafd5eaa5aa044babc112ead7fb",
".git/objects/50/102e71470edea845ff4454888222571405fbda": "0d07c687c36033905c2c5b97b478f8d7",
".git/objects/50/1070511c46ab9e91a9615421116535de2f3075": "8c434e6ad85021d6289ceefc52777221",
".git/objects/50/6dc9535a66ca97851eebc3621abb340de1c463": "5aba56e8952a2a8e62fdb18dc01238d8",
".git/objects/54/0363c45c2650d269917d0b22b1132a4d992ab1": "e6ca1ced6e1f4036c3883c199bf41d0e",
".git/objects/54/daf9c03466b7ff0ae5fb139fd33de374a55a28": "08cfa0642b0d3a518f4fb6108a36a218",
".git/objects/56/c5f3ffedd93142bc23a248636f83ddd66a265f": "5e893f9ac15d67e7a627b9fcaa9e8768",
".git/objects/59/a363cb8137d354d06109e42e6e49d6c76d6cc1": "317a6afdb0eacab149c527b5cf53f05e",
".git/objects/5a/8e52249690914b8de188a10bd50d9c3e7a0d40": "4abe9a94e34927a67e662bb8c514b1c4",
".git/objects/5b/83dec060d9a926fe7a27c4fbdb1bdec205de84": "2508f876f30daa4ab78c3af1397da6d4",
".git/objects/5e/3bfa59b6f947fb8590be83c1edd319f7402355": "06580ac0dd54d3dca05933ac4ec4966c",
".git/objects/5f/61684696ac5dab77dee8e28f463ce16d2740ad": "f874739f6228400fe00eebd673326190",
".git/objects/62/373faa469df9955b7f854fda2096b14e5ceb64": "ba9b906475e9e522e7cbcbcd30a25684",
".git/objects/62/6fa6f92390f48b890a9a177aa4253e67737212": "4156bd1c4c96e12b4b140f9680b2ea5e",
".git/objects/63/d0c1bd7248b3261abeac544444d5bce8ac1742": "0b0591beea6a942bb1b8d6d9b8f6faa5",
".git/objects/68/8ede02d7afd600ebbf3400b4c67bfc636348fd": "4f65e5f6ae9f60480d0d876704f04169",
".git/objects/6b/d944091f1d153e44163a33a1df8fa55a8aac5f": "e07cb30e0a3e8e6a15fca14300629c8d",
".git/objects/6d/afe923d8172b4079b3d02b31249fce8baefda0": "453a9588405cd76bdb80733c75777a59",
".git/objects/6f/4bc645877bc05f66fdb3ef36179cd6889e6707": "7d790ce5a020512646566e5346c29c78",
".git/objects/72/6daf4341eab8210c0a234ef2f4849ec9e60ba5": "de769332631a900a494c5aca6ec7ee96",
".git/objects/73/2506a80b1ccc57cc57a4c7f21120c9a3b9bc8a": "df24bc21f1613e69f5d44fd07d6cd42b",
".git/objects/73/9976b13f820940b5106e0f187dbaaa8d77bf68": "c06244889037103c9f59f09af2286d8b",
".git/objects/77/a79e78c09d659f56f9cedbac33aa8f200ba0fb": "ca9068fbe0fe09a209186edf94c4c110",
".git/objects/79/9aaff8ddc43414749c1263596a4f443bc7cab3": "66d502be147281a98715864ce4986776",
".git/objects/7c/3798a7a53af1bd878f95fa7ee0035129b80b84": "882eb60812d4c2a0272c9dc479d996a8",
".git/objects/7f/3dfd8b208d3f5d86e0614a0faadefbce43eb9e": "11bf2194652eae1ebeffe3f7c1387f99",
".git/objects/7f/b798acbac1d28fe75a1cf4eaa06c4dd1c88163": "25a4018338d2b1edb2894cfe34fe3812",
".git/objects/85/9a9f049c276ad44f2930ba32c0c0ddb5b857b0": "9b5819561def467c0b7317586bd87056",
".git/objects/88/37beb5b31884b3a5a0e982483f59f97866ec23": "e1e8e47b45dd24ca35abb51968d75881",
".git/objects/89/d1cb25f9c371e6c397cac8768c0eacc40ad4b9": "802267ba8bda76cdbd5a2dc888db97a7",
".git/objects/8a/c2d716c1a9f1725b16d80d34433554cfcac276": "f1d66893ec742fd3d59a8c5c37caaf53",
".git/objects/8d/95ee4d17c3b82cc89d80ec4e5833c0118d67a9": "cc776c222222a31e78009c227b978ed9",
".git/objects/8d/b63fe169da1c01ac726c87b99ff8280d7a8194": "7894c9dddd9079b7d7e508d3be18708d",
".git/objects/8f/9ff15c4b1c77b177bf43800a2f8e6173fa4a93": "a34fcc73dbee2b0445ac8cd5e47f756c",
".git/objects/91/80f2f25dcf5531bbdc10aae08869619335085f": "9f4e5300e45ec11db4586f68330b9de3",
".git/objects/93/c575dcf8efaad2f8f256a121b5e1de60d14e24": "6164f0429a470c7c205a4db49ca3fd9c",
".git/objects/95/9c52268739eb6fc1c25afcd56deac10ac22e05": "cebd3fcc25e8d641d6511409bc52d3e0",
".git/objects/95/a0a6d75f8c5789215f3da061a5146cfa6634dd": "3a4d923062f82a4f4874f90faf05ec3d",
".git/objects/99/48a475b37c4f5551e19f16410884d1ad12f842": "279d89e3d2c5e385caf6a57b4f58bcaa",
".git/objects/9b/083d9117641b257e2e5f76513ed028446c3bf4": "861c8dce933ddd37c6cf08a5d3eaf069",
".git/objects/9c/42e3fff2fa6f60c20f3413930812b2669aaae9": "d827e953645e6c31fe6be71dae3461d7",
".git/objects/9c/767bdfacc958d3fc0959f7372978696392ef21": "884ae15e0811d03e8de28caf104db85f",
".git/objects/a2/e5b3702f34cc5060a77fd999f0cbd44662155c": "b8f45803adf3987483e89b7d26f0fdd4",
".git/objects/a3/0c3bdd2ed19c840d49f0ab99bfb8e568f4464c": "f02a0e24249607f5aa2915cc0127d738",
".git/objects/a8/bfd25309fabc28b8624d6e71378d59a2264d6c": "df6c96208052933ab9c620836c7eba77",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/0073c78857bf6ce39782db81867ab177912b76": "3dc7c0234ffa9c8a3d43671fc6d7da49",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/abb907df109afb18a768dbc8513514e66b5b01": "b5c6bc937a830af2b67b3dd9b278d302",
".git/objects/ae/104fa1df55e51ed441977bb40984556f773267": "fcf6f0a8e3a58714bb336909de2c2e50",
".git/objects/b0/2e81edcf47edbbc5a8b9fcdab103d5c2172e44": "342665988eb339faedbc949266f34a1c",
".git/objects/b1/07b830bc3800769dbe2521c9ab907259711edc": "88f2bb3073ef524330bd09efc4dd157e",
".git/objects/b7/5e53dc1987a9b2440a778e5821114e5325150f": "34eee92e8963a08025eda794f603f0a7",
".git/objects/b9/19728aec0c2730ed22fdbd90227ff59b5ca693": "a6b16f8d7b17e3b26054e046b771c5ad",
".git/objects/ba/f5cc4f66ddca68f78a66266e902115fa2ca6b1": "0a9a831e231e0225e9c2a42351280cd6",
".git/objects/bc/dba52e84fe5504d3ad95debee49ce94c03dc0f": "de4a5511f7423178b1bbe86c606c2c4b",
".git/objects/bd/3aec65dcb2f189406a373abb6e159bc98ca3db": "7331dbeb4056129d34f9f32f67814747",
".git/objects/be/cec6fffca979d168668b77797611e453ceb9fc": "14a24cc9142b1f03930069b8be6aefdf",
".git/objects/bf/ecba52fae7a6465271b68ed3f427d198599dbf": "1345d5378fc8896bf3adf93f35d81252",
".git/objects/c2/0cdcb07a0aa29678a2f1b71b5514b12440ce77": "28340a1bcba3fff5e13e86b65b46d6ef",
".git/objects/c2/dd1051eb366af7fb9b0834efd4c34f24756029": "03cc1672f09fd8e8a4f5cbc07df219d0",
".git/objects/c6/9d400b00329d8bd7a7a9cafbe0be7745ae04a7": "11c5d897a1ac0f34f93cc896979590fd",
".git/objects/c8/cf77d6958cd448e94d7baef1a5cf3ec0e6e7e1": "40654ae4e2ff80f680be87b19ccf9241",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/126c5ee3ed51d37bf0242f97cb95e600d9550d": "3276bd0c763684ee4a96bbae2b1f8b12",
".git/objects/d2/0cfdedddef6b634feeb14dc506f88841cc52f4": "caf6d9766f5ad29a43446f4ff05d5d62",
".git/objects/d5/d547c58736f7031ea3731d9e37159d28085f3f": "90da6d4758b62af42af395b4d74aedc1",
".git/objects/d8/d79a8ace4906d85cbb2bc3599c4b35a0063de7": "ad0dca22bfe4b1121dd623e2e5ee5d95",
".git/objects/d8/ebc1b189da76cb18ef854a8d572e9b3760707f": "190205b43c0ccecac92dcd675fe0b71f",
".git/objects/d9/8e8aaf343fec08a71bb72992c40be8dafd0eb4": "0e1f7b607fd7fac9d824b692560657c5",
".git/objects/dc/dae94248243ecac84347c77734d2adee5383e6": "d867b7e03b25a871415913872e1756d3",
".git/objects/e2/3229c5e0e0af2b792052be799c30f2500bf1eb": "c59eecfc1229849a16ef7daa12c6a550",
".git/objects/e2/f9daf377c4b1a11980b6759a305f2846609dfe": "3a528b50f7181ba936079bd27f9345f8",
".git/objects/e3/15827cfbfe261c36087610abf3cf40a4910834": "b7dbcebbc4e20ff386c647b46c416d87",
".git/objects/e3/98e489c12e345d3f88fbbeff3c37609e645b1e": "b4708f740801a9c3e1ed5d3f7bed1c5d",
".git/objects/e8/bd6170b7ccbe98318f936264f4b1dab758da69": "4248f2f32a4daa1a6a9b756c48aba23a",
".git/objects/eb/4033ff08de6e934c57b819e34357c733f6b158": "1c7dc013c4c4e7b7009585ee08f2b6c5",
".git/objects/eb/9b7987cda7622c967cddbf37e89858d66ba90d": "1b172d68b16986e527292942af7392e9",
".git/objects/eb/f20d27e40410fd5ef8a7854f5d67109e62d59f": "358df8920ab93aeb3e299a57f627de0b",
".git/objects/f0/271dc832e7dbbf04dd2eb155912da020d0f02f": "e38015dcd9f2803a35beeeec40cb94fb",
".git/objects/f1/a28db379e6852471b7fab36acc5800e686b0a4": "3ba793e1b2397ab6d8ae4c4c516289e4",
".git/objects/f1/d62e41aa00adfaf880f3c3c408b3caff1ffd03": "9e591e4c6636c575b249608a6132c7f2",
".git/objects/f3/703c79e240cf5d484e31791b2d6a133f385e89": "44e9624dddbade12fb9c8c96b590b33d",
".git/objects/f4/23f9b1e26368f5b9b91522612612b48a30a147": "ac84e96051d1440cda9259cb5b33da82",
".git/objects/f5/497ede4b0b2b039458e867be3d0cea3075386c": "aabff8bf59bd9018e9581f2fb47e5023",
".git/objects/f6/3e81dba853ca6e8e558595df75d9e8f3786e8d": "4e4ab35316324f3e4ec5eba03503eea8",
".git/objects/fb/5aed1fc020ae14cf0daf7419b3e5b6c9c5c84c": "29609aeb3ed046b8c9ab380aa96a4123",
".git/objects/fb/e050312e1978e78b12193c3ac8909ef4f339e8": "54f874d2c8dc553fd42cf772a7559ec3",
".git/objects/fc/26a9d8e18d2a0837f08170cac2b07f6eb6b141": "4e4c981b5f82a402bab05f759599bd94",
".git/objects/fd/85c95514b41a90c2c1e6f31d675e41b4063171": "46fea495f5749d78045c76f4f5fbaea6",
".git/objects/pack/pack-f2df18d1c55176c667d29807840f9589bdaa4733.idx": "890216b22a0df4ad82b50d1782f39ec3",
".git/objects/pack/pack-f2df18d1c55176c667d29807840f9589bdaa4733.pack": "d255a7784b5fc224877999e09ea82041",
".git/ORIG_HEAD": "71ba243976e045b5945eb50035acb853",
".git/packed-refs": "cfd14e66ca36d8b5e29b7f471d9e6c2e",
".git/refs/heads/main": "1caedadd04c2eeb428d82d70618953e2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "1caedadd04c2eeb428d82d70618953e2",
"assets/AssetManifest.json": "129e31dff71854db0db67a4f20553291",
"assets/AssetManifest.smcbin": "f5aea6b4075c98d4f4e6b5eb15b53631",
"assets/assets/images/404.png": "13fcc8422747ce62cdb21cc810f1c175",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "27c7491c8bd523e9213b81986f7c72cb",
"assets/NOTICES": "f765a6933c00b4a761fe7ee76cdfa299",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "06a53538096757f016fb1fb5e56268f4",
"/": "06a53538096757f016fb1fb5e56268f4",
"main.dart.js": "cf6dc9c2cc0261deeb7d00c390802f4b",
"manifest.json": "e9be6149a557354e62e678e5efa0d028",
"version.json": "48e81b2df43e00977da602f0d33970d0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
