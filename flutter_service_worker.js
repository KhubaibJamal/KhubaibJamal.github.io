'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6088163a82f63b6c9d15ca22cdb68a4b",
".git/config": "7b859f6a7d28e868dd2b0a8b3bbe8673",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "13bf5e9acd8178a16866823c17f8e7bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d714677607bc0cf6aed103d8fd40d89",
".git/logs/refs/heads/master": "0d714677607bc0cf6aed103d8fd40d89",
".git/logs/refs/remotes/origin/master": "47585f1e44b5f3350dca7859e95a8d6d",
".git/objects/00/6d6f84999fb2e0ca200c570aa9f6579ce44350": "e7b4e1953876fc2abfdfbdc8b8c13594",
".git/objects/00/8545c3de9a7eae99f027454a29c7fe77cdb891": "2fe15f3680d33ba7ac1c2ecd43b39ac3",
".git/objects/00/d73c1f3db0708f12ad5616e15c0417937270cb": "01ec802ef44a94ee588179d5ae4aa404",
".git/objects/05/7bbbe0e175a004ab3dec11f0208601a1f54793": "1121167ba82e71762ae8c8057fa5878d",
".git/objects/09/23be25797efe7eec138e57ab5d59a5bbbc297e": "0305b920475a938266850fa6020d96ad",
".git/objects/09/c1ac711137e11474225002f0097890297d1bce": "d50480da919a8b1e542905d8cc8d44ba",
".git/objects/0e/dc8d708810d1f17845344dc6adb559b897c6a8": "b82aea14db8fa3d9224ddd8b91d22eb6",
".git/objects/0f/f69513074576b1a5977f1481a4d317bbce45ae": "8c6d8997bae3b91b1072f8c694740674",
".git/objects/15/d5a6b19dd4b989fc5631449432d7cf23045ba8": "2b84b8db29eaa99c0ef46227b2f49651",
".git/objects/17/56bad461cf8d0648b79541eb61b3e396d96fed": "5920442ed26c247359244faf0bccb071",
".git/objects/20/57a66e6c414ad237c801408c193fbd21a3ea32": "348bcd5f80d6ff210cd862aa0a988c77",
".git/objects/20/a7dbcaf15b5cbc8df9da6ca50b0984f2b6c17e": "e03f8d4ce6b9a87cf2b240b5746dfc4e",
".git/objects/27/0254f9b7601dc2fe0506c11add062c26444035": "ce96c284081d5cf7f584a329b30aa42f",
".git/objects/28/d8ff9db392c4952e0df56bb89d82471ff6c249": "9cd9805ea54af8eebbbc7617a4b94ea4",
".git/objects/2b/8b658355da59697e17ce72946d1f9bb1642631": "2f99c7ac4029a658db41e0ccc9a6346b",
".git/objects/2e/b8b9ee28f3eeae800a20ea71cef2d02728d73d": "eab9d92b7a9e01bc9510412a2124cce5",
".git/objects/31/4dd77fc8605d0fd30c20cf07f648a877bd425e": "0b5f65e450d000ef4379ae35a8a35f14",
".git/objects/32/650fe1b486fa46cbf4deb205384cba1d7a4433": "50f7196a6c9aaf4b16d1c4ed9811d25e",
".git/objects/34/833c27dd2c24011235e9cc306c45b8cc5f16bc": "f2e84eace13d987ee1d9c3bff63fd67a",
".git/objects/38/3e5a25104f9f66e6906e86de4c294a463df77a": "37e836e68a864580605ebdac083b6401",
".git/objects/39/1fec9fde3eb5394ec7b6c6f14204043c0226bb": "355c3cb0a3afabfa73da1b7763b02595",
".git/objects/3b/dc44fe72e90697772b0c852946ed22a4005d2a": "6420e1469c482d3c1069cb1dbd8fb3cf",
".git/objects/3e/068413e1234eb0e4a4f2e74321ba7aa37fd765": "72927d3c8494f83032e5d42375b9c52d",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/2b7d0351ff080207effed8dff31197d17c4d54": "e0e16e2ba787249bb81f5f0fa4e66acb",
".git/objects/42/9dc745a76846763e6c967539a53bbd00128440": "74c3beba25977a2d372f8b253efe5114",
".git/objects/46/ee2a5fca7e5168693974b4bc130eb7ab4aff60": "a9ce4ed5dd0525569a02f8bd720c728a",
".git/objects/47/4d78fec79f1059a9470126ab3191d3669ba62d": "2fa7e8a6e07e6f9cbc07303b40cc04dd",
".git/objects/48/2cba064f2b84709764e9156a698464d087910a": "71d573d11fff00ab875eb2e83e6d56e5",
".git/objects/4e/693066e41c7a2a955b4ea688ec8316b582ae66": "d835dcabd608989e1593a241fd027d3f",
".git/objects/4f/6429ed87fbf39e3e4dad5477ea1b9cf7eb5364": "19d110a7c6007e7f87913b67e12d35bb",
".git/objects/52/6be56c0354e6a353ba6d31ddfa137e45b33830": "61c984a861c15358085f29ef04eda254",
".git/objects/5b/7c651fa58819965091dbcd5ed7dfaa4d3eebb0": "8dd5b6cd610164ceb2df60a7075b9207",
".git/objects/61/a4406b4509786c4b8e363a4766df786639f511": "0d6bcc17eeffbdfbc07b4765169f5bc3",
".git/objects/61/b83056cf590be35c6e25af2cb3de9d7053f52a": "02f5f4a2b2456d44597ddd799c0b34bd",
".git/objects/69/9f6d0aec1b3a11af730f4d93e181a4aecffebb": "2ed0ee5988c52cb17577b777b947b9ca",
".git/objects/6a/53784e6691f3d7419cd79fcea2995abad577c2": "ab907e7f717e9a4a47e7efdae23e0d76",
".git/objects/6a/a8b0feaca204b59c22cda048d8beeed12e5140": "1f85aec321654eb0c3c8a1458db088a6",
".git/objects/6e/079f6984098cc53f68a24390936a73a6dcd944": "9860083b26475cb02af305975737a70b",
".git/objects/6e/42cf7a20da43799537e245f1bf7247757cc8bf": "45409723b139c53bcabdb8b88f704eea",
".git/objects/70/66116df7b485a824b2b126632547ff9aa9ba9b": "3e4bfd2af092062555ec6d063aaaae60",
".git/objects/74/20deea863b7f231122bc93ad49999bc6209bfa": "980717e24affc79e883dbb6fca7bc0c7",
".git/objects/75/965f7403bf26a16cdaa0fb7882c85f8d0758f8": "affa45ed5313cb3143f30960cf55e534",
".git/objects/76/2fc9d986c42cf51a90729cd579c455680180b8": "8ab48c82e348431f15505d3d0bff2a2f",
".git/objects/79/7cedbd4e68d622ae4dd8538002f68eeafb3501": "353bf62e774d4bd9a68874e66ddb184d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/3f092c21f31937bcfdec286a38536f2e82db3d": "c563a83c7e2b219e29f693434c8d1756",
".git/objects/81/b55d90bb459fe77edf9c4c4ceb068d49009390": "98124b22668a09c03dd471a70255dbd0",
".git/objects/87/403e1f25a72e6937375f4a8b8b1c9a4a491926": "2677c8470dd581580e3180e5d7af77e6",
".git/objects/89/1a11ea3a6733e3122e7ddedcbe0e8de83f36c3": "ff56b565eab0fded341e42c281cfcbc4",
".git/objects/8a/11c16f728225e49f82ac531d8ed44f8e21146d": "4ea806932c1d9f77dd4d8b2f2bef3007",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/b42df00eace87047cf1b766741ebe59b3d7bf2": "586a6e0a5c9f1e51a833d1d4ca3ee4ba",
".git/objects/8d/d208b61e766cc8c68f1cc18aaf0087062292f8": "2814e82075f4b3e40845487fcb7a5075",
".git/objects/8f/1f43598ac66665c3c225a95cef177c73010459": "ad017d63bd82eae28d262e89b5c17899",
".git/objects/91/783409d9b0e50a7d7bb274387b9e5fd975574c": "1c28110deb387b2fa69da047f6fad572",
".git/objects/94/9fb2c4eb0269dc81c8541f1493bb2bd38b4616": "c97da158bd17e6fad1da9991010a5bff",
".git/objects/97/140120677129fc973ccf43ee0c447416771f3d": "0363992f0590d2dc597d86e5878a299a",
".git/objects/98/5a112468ca535ded7b0ed8d515353afe0b7640": "9b13d6e7f1667c850b62e5eb48390861",
".git/objects/9d/7a4bc940eb8a36865c1c7dcdc7902be52ca39d": "a842a3dc33e96cf8bb1568b9424df464",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/0a094593740d39ce2d5d3e6b330758f06be02c": "55940cab41f88168114ae302bf13af5d",
".git/objects/a6/f862f8b3c894f065d6abd7c77d5c9365dc9ff2": "ecee8fb59feec3c5314590bb80595693",
".git/objects/aa/2ecced38b15e8e5a575778cd98aafee4d96bbf": "fc7384ef8ebdaf062db19df731338185",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/cf079e82a81f0d6d87af42360a606af324099b": "5069f64f762d4a0226ba2b564538fa3c",
".git/objects/b3/1a5f1e70491b129d7394da2d805326b3b2e31d": "a46471f0dd3e68a9857481c17ef48f12",
".git/objects/b4/9478de1f79faf8e9585a5294acf9c7f44dd63a": "a63c6be39ff2d0bfe9a026e65441d670",
".git/objects/bb/20c5c881a21bb123f68a9eb222cefa66e04903": "1c96d72fd3bf8baf0386bf285226f746",
".git/objects/bd/789dc4bb3b5fca5c6a9b1e6bcfa734f5c3bc99": "1f7cbca3ee43e3f122beaff6c4c6a944",
".git/objects/be/a73150dc4cb715ca697e24ce4613934ca849a0": "19aa7877274efcfe6f014e8843beb241",
".git/objects/c7/434efd3b9c1ccf69de72c5cd2c0e53fe15d47f": "92fb2f19ff863788f0081286555523ba",
".git/objects/c7/e36ba15883a85c56b6b4b57dbe7e46153d8313": "ac5c92db986e9e3f2671d2740883a34a",
".git/objects/c8/59e152f93cb351e3bbdd8c8e1678b150aa8de9": "019a4607a23dcda0952b3a8f5421797d",
".git/objects/ce/59179e66d617e69b72ed932e9f007ebf933c76": "a35583a0eda44b296238e1b3fe37808e",
".git/objects/cf/253e0e31b58af30a0b134f9d2ebc8e8ab0de1b": "8b688fbf92149e38468b8cbd0329ed01",
".git/objects/cf/8e55ef5e105f17c57ad3df64ffb74e4726b34c": "bbce4e69c101f4355a3cd39d7c9c1143",
".git/objects/d2/687dec811932258404c3d4e8008d4bb7dcdd20": "727ccc27dde7c7fd4cb55cbd1b48b3af",
".git/objects/d6/5a91d5e5210c1c5655e0ae069928ff7d76cb91": "f580a71072307b717b0f610e071ccea5",
".git/objects/d6/5c1f0cd8273b06bde61e0ab1115e05a7af9928": "ed246b6e21935506a2b2f7991de970fc",
".git/objects/d7/5e68c944e982a2d70b995a553b22b4efbca20f": "ebb13f87045d730dcf56e9b81276330c",
".git/objects/e1/5713b5597e41b588a156ab30a4e78317c98480": "17f1bdc641520402b1cbad7054ffe109",
".git/objects/e2/445d7908865994421c0437c1743707fa2b197d": "6937b44d06e05ac80dcf3b033e9372b4",
".git/objects/e4/dbbf390f90a0cf5c7375fd46ce93905ccd3274": "d537d3941eea7563b2febb6b52f68e6d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/b57790a0c6939f9d5caf686071613985d3850d": "ad68aa4f58478b0356f58c437ed9898d",
".git/objects/ea/d57ef283679729612c4a5891c2624cad0ff15f": "c8dd111d60d2d996d97fb8dc20632b1a",
".git/objects/f1/dec2067750d9742fb6ba48422639f8bc542d88": "7b8f2e1e91b9f544efee5e3781d6bdf6",
".git/objects/f3/27b3c1ecc5ce86c0e2423814f91968efe806d8": "ea8f94f73379953a3fb6a4d3c04c3467",
".git/objects/f5/13b6ea11eb805ac540c1207dab671127cdd74b": "1ed54e2b1ba06c86c42a7ddcaab6f216",
".git/objects/f7/3205abb64998bccf8d46047ebc362186d531a3": "c71f018d1e77016610f47a957940b7f3",
".git/objects/fe/474f5624f4d5a2eafa796f8448abba80064827": "7f823d1658ecc467185f520bbfd17931",
".git/refs/heads/master": "9741873e614e187eb87f5b6e5f370c7c",
".git/refs/remotes/origin/master": "9741873e614e187eb87f5b6e5f370c7c",
"assets/AssetManifest.json": "e5a3aec863ae417a20cc826cda236ccd",
"assets/assets/contact_me/constant/location-dark.png": "08a65e7c79b85fbcb40e8fce00953e47",
"assets/assets/contact_me/constant/location.png": "dbc10b089546daaee5c45d9bb754f989",
"assets/assets/contact_me/constant/picture.png": "1a817a95a42d8c43031378d122a05ffe",
"assets/assets/contact_me/CV%2520picture.png": "d1e14ae76ca9876f2011956a44677e5d",
"assets/assets/contact_me/picture.png": "13a4b677d9fa726efd9e771189222bf5",
"assets/assets/education/azeem.png": "603bec1211134c9a756928aaeeffe337",
"assets/assets/education/constant/education.png": "1ebc9c3cdde631ddd2f356001c79eceb",
"assets/assets/education/gitaram.png": "e0c528ff1e67d954a6039ce204c38c8f",
"assets/assets/education/rcciit.png": "e549f157d5783656caeb1f605259b897",
"assets/assets/education/sai.png": "1345d0a5ca03c42e8fa3c7953f78518e",
"assets/assets/education/ssuet.png": "a3909f9d5f31b96e301a29702df32110",
"assets/assets/education/stxaviers.png": "54936ceae932c0337c5c4096d2bf6037",
"assets/assets/experience/coding-ninjas.png": "5b94a7d8ef90a9b60a3967745e044778",
"assets/assets/experience/constant/experience.png": "8f6a768aa1f3a803088eff838313f7b0",
"assets/assets/experience/credanic.png": "27b5605cf2f3291e4cfe71f4f97daaf2",
"assets/assets/experience/ekko.png": "465a59cd0ceb084c32ff599c728168b1",
"assets/assets/experience/GDSC.png": "a144476dba333629f9a232e8c7cd64bf",
"assets/assets/experience/opensource.png": "997db9ffb7f57a2c0ef1323c6056c44b",
"assets/assets/experience/rcctechz.png": "40de2922a15538d96a1210fd9eb8457c",
"assets/assets/fonts/FjallaOne-Regular.ttf": "4fa3683005fa20dd058f47b9cfd411df",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/SourceCodePro-SemiBold.ttf": "420d3580f5b6e63ba1eabb8555b5f6cf",
"assets/assets/home/constant/email.png": "b4ac60cde3dabbe4bc1b8b7c88dc4585",
"assets/assets/home/constant/facebook.png": "9c8bf990645fc6189df6caedab34628c",
"assets/assets/home/constant/github.png": "9b1ceae0aa31486938531880614681a3",
"assets/assets/home/constant/HackerRank.png": "12a5f57b0a3d8b97f2f10e246a1e46a6",
"assets/assets/home/constant/instagram.png": "6a5e75ccceace8a900c3ca017bb5933b",
"assets/assets/home/constant/leetcode.png": "b76f662706530971dccaf8281a0acc45",
"assets/assets/home/constant/link.png": "6bd16f15b5c2d30c08557a84b776f3a6",
"assets/assets/home/constant/linkedin.png": "f23f5409fa61de28d92d02527411c140",
"assets/assets/home/constant/medium.png": "5a77eaa1f4fc98e76a2129c5ebaa119a",
"assets/assets/home/constant/stackoverflow.png": "c9fe76704b498db68c7d263216b9e680",
"assets/assets/home/constant/twitter.png": "babebb599190a8bd5bb5417e4f7fdcad",
"assets/assets/portfolio.json": "c5d80f18dd14196858a7fb03f51a04d1",
"assets/assets/projects/constant/forks.png": "84f1baf0bcf3b4cf3ea5edb36548e069",
"assets/assets/projects/constant/stars.png": "449614124a2ef5910c35e1e9d62aec5e",
"assets/assets/what_i_do/bash.png": "8aec2de4c0634c93202ec36d7ac4a5de",
"assets/assets/what_i_do/c.png": "9f6665a404d1b2384b4a90419ad08fd2",
"assets/assets/what_i_do/constant/checklist-light.png": "c6a80a3ff27e7db249fb88159383f74d",
"assets/assets/what_i_do/constant/checklist.png": "bce0e7781492fe752297f8369c666494",
"assets/assets/what_i_do/cpp.png": "efeec8be519a45426ed24cd91b86fc53",
"assets/assets/what_i_do/dart.png": "88d2c27b62640c6625fb33c4e79e9a6e",
"assets/assets/what_i_do/firebase.png": "c08f10265b99f41e44ed97c889088e26",
"assets/assets/what_i_do/flutter.png": "5b26614dbdbcf4b3ecb80bed00ad3702",
"assets/assets/what_i_do/git.png": "2f2db226d2f03acc82b77c7fe652fd3b",
"assets/assets/what_i_do/java.png": "53b82a97cf4e13fac807691e7b0be082",
"assets/assets/what_i_do/linux.png": "0dda41d21f571add8b3a558c9914c8ff",
"assets/assets/what_i_do/python.png": "d464079775fdeabf0ffb1323b2a02d2c",
"assets/FontManifest.json": "f0f4be009d67b49f6afb66286f706923",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "417097e71f1ede2ba177669258de1b7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "d53f5abdf6ddba1cfb125cc6f5d23a3e",
"icons/Icon-192.png": "39a1e5c341d89186ad112e3c19111277",
"icons/Icon-512.png": "8bc4e0c3ce34931365fa206c905fce62",
"index.html": "ad0b7a1e917c20ee353a9af244e655e0",
"/": "ad0b7a1e917c20ee353a9af244e655e0",
"main.dart.js": "2e1f8df4e9cce8e4321eb946158abff8",
"manifest.json": "6cbe41637e331ef626d9a50c26f95fc1",
"style.css": "ffba23ff301032bec9a3922e763ddcca",
"version.json": "db8990b8a733cdd52065ba1549ba9aa5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
