(()=>{var e={fallback:"https://hbs-skeleton.netlify.app/",homes:{en:"https://hbs-skeleton.netlify.app/en/","zh-hans":"https://hbs-skeleton.netlify.app/"}};(()=>{let n=navigator.language||navigator.userLanguage;if(n in e.homes){window.location.href=e.homes[n];return}let o=n.split("-");for(let a in e.homes)if(a.indexOf(o[0])===0){window.location.href=e.homes[a];return}window.location.href=e.fallback})();})();
