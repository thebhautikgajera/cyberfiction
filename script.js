function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

function canvasHTML() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
       ./media/CYBERFICTION-IMAGES/male0001.png
       ./media/CYBERFICTION-IMAGES/male0002.png
       ./media/CYBERFICTION-IMAGES/male0003.png
       ./media/CYBERFICTION-IMAGES/male0004.png
       ./media/CYBERFICTION-IMAGES/male0005.png
       ./media/CYBERFICTION-IMAGES/male0006.png
       ./media/CYBERFICTION-IMAGES/male0007.png
       ./media/CYBERFICTION-IMAGES/male0008.png
       ./media/CYBERFICTION-IMAGES/male0009.png
       ./media/CYBERFICTION-IMAGES/male0010.png
       ./media/CYBERFICTION-IMAGES/male0011.png
       ./media/CYBERFICTION-IMAGES/male0012.png
       ./media/CYBERFICTION-IMAGES/male0013.png
       ./media/CYBERFICTION-IMAGES/male0014.png
       ./media/CYBERFICTION-IMAGES/male0015.png
       ./media/CYBERFICTION-IMAGES/male0016.png
       ./media/CYBERFICTION-IMAGES/male0017.png
       ./media/CYBERFICTION-IMAGES/male0018.png
       ./media/CYBERFICTION-IMAGES/male0019.png
       ./media/CYBERFICTION-IMAGES/male0020.png
       ./media/CYBERFICTION-IMAGES/male0021.png
       ./media/CYBERFICTION-IMAGES/male0022.png
       ./media/CYBERFICTION-IMAGES/male0023.png
       ./media/CYBERFICTION-IMAGES/male0024.png
       ./media/CYBERFICTION-IMAGES/male0025.png
       ./media/CYBERFICTION-IMAGES/male0026.png
       ./media/CYBERFICTION-IMAGES/male0027.png
       ./media/CYBERFICTION-IMAGES/male0028.png
       ./media/CYBERFICTION-IMAGES/male0029.png
       ./media/CYBERFICTION-IMAGES/male0031.png
       ./media/CYBERFICTION-IMAGES/male0032.png
       ./media/CYBERFICTION-IMAGES/male0033.png
       ./media/CYBERFICTION-IMAGES/male0034.png
       ./media/CYBERFICTION-IMAGES/male0035.png
       ./media/CYBERFICTION-IMAGES/male0036.png
       ./media/CYBERFICTION-IMAGES/male0037.png
       ./media/CYBERFICTION-IMAGES/male0038.png
       ./media/CYBERFICTION-IMAGES/male0039.png
       ./media/CYBERFICTION-IMAGES/male0040.png
       ./media/CYBERFICTION-IMAGES/male0041.png
       ./media/CYBERFICTION-IMAGES/male0042.png
       ./media/CYBERFICTION-IMAGES/male0043.png
       ./media/CYBERFICTION-IMAGES/male0044.png
       ./media/CYBERFICTION-IMAGES/male0045.png
       ./media/CYBERFICTION-IMAGES/male0046.png
       ./media/CYBERFICTION-IMAGES/male0047.png
       ./media/CYBERFICTION-IMAGES/male0048.png
       ./media/CYBERFICTION-IMAGES/male0049.png
       ./media/CYBERFICTION-IMAGES/male0050.png
       ./media/CYBERFICTION-IMAGES/male0051.png
       ./media/CYBERFICTION-IMAGES/male0052.png
       ./media/CYBERFICTION-IMAGES/male0053.png
       ./media/CYBERFICTION-IMAGES/male0054.png
       ./media/CYBERFICTION-IMAGES/male0055.png
       ./media/CYBERFICTION-IMAGES/male0056.png
       ./media/CYBERFICTION-IMAGES/male0057.png
       ./media/CYBERFICTION-IMAGES/male0058.png
       ./media/CYBERFICTION-IMAGES/male0059.png
       ./media/CYBERFICTION-IMAGES/male0060.png
       ./media/CYBERFICTION-IMAGES/male0061.png
       ./media/CYBERFICTION-IMAGES/male0062.png
       ./media/CYBERFICTION-IMAGES/male0063.png
       ./media/CYBERFICTION-IMAGES/male0064.png
       ./media/CYBERFICTION-IMAGES/male0065.png
       ./media/CYBERFICTION-IMAGES/male0066.png
       ./media/CYBERFICTION-IMAGES/male0067.png
       ./media/CYBERFICTION-IMAGES/male0068.png
       ./media/CYBERFICTION-IMAGES/male0069.png
       ./media/CYBERFICTION-IMAGES/male0070.png
       ./media/CYBERFICTION-IMAGES/male0071.png
       ./media/CYBERFICTION-IMAGES/male0072.png
       ./media/CYBERFICTION-IMAGES/male0073.png
       ./media/CYBERFICTION-IMAGES/male0074.png
       ./media/CYBERFICTION-IMAGES/male0075.png
       ./media/CYBERFICTION-IMAGES/male0076.png
       ./media/CYBERFICTION-IMAGES/male0077.png
       ./media/CYBERFICTION-IMAGES/male0078.png
       ./media/CYBERFICTION-IMAGES/male0079.png
       ./media/CYBERFICTION-IMAGES/male0080.png
       ./media/CYBERFICTION-IMAGES/male0081.png
       ./media/CYBERFICTION-IMAGES/male0082.png
       ./media/CYBERFICTION-IMAGES/male0083.png
       ./media/CYBERFICTION-IMAGES/male0084.png
       ./media/CYBERFICTION-IMAGES/male0085.png
       ./media/CYBERFICTION-IMAGES/male0086.png
       ./media/CYBERFICTION-IMAGES/male0087.png
       ./media/CYBERFICTION-IMAGES/male0088.png
       ./media/CYBERFICTION-IMAGES/male0089.png
       ./media/CYBERFICTION-IMAGES/male0090.png
       ./media/CYBERFICTION-IMAGES/male0091.png
       ./media/CYBERFICTION-IMAGES/male0092.png
       ./media/CYBERFICTION-IMAGES/male0093.png
       ./media/CYBERFICTION-IMAGES/male0094.png
       ./media/CYBERFICTION-IMAGES/male0095.png
       ./media/CYBERFICTION-IMAGES/male0096.png
       ./media/CYBERFICTION-IMAGES/male0097.png
       ./media/CYBERFICTION-IMAGES/male0098.png
       ./media/CYBERFICTION-IMAGES/male0099.png
       ./media/CYBERFICTION-IMAGES/male0100.png
       ./media/CYBERFICTION-IMAGES/male0101.png
       ./media/CYBERFICTION-IMAGES/male0102.png
       ./media/CYBERFICTION-IMAGES/male0103.png
       ./media/CYBERFICTION-IMAGES/male0104.png
       ./media/CYBERFICTION-IMAGES/male0105.png
       ./media/CYBERFICTION-IMAGES/male0106.png
       ./media/CYBERFICTION-IMAGES/male0107.png
       ./media/CYBERFICTION-IMAGES/male0108.png
       ./media/CYBERFICTION-IMAGES/male0109.png
       ./media/CYBERFICTION-IMAGES/male0110.png
       ./media/CYBERFICTION-IMAGES/male0111.png
       ./media/CYBERFICTION-IMAGES/male0112.png
       ./media/CYBERFICTION-IMAGES/male0113.png
       ./media/CYBERFICTION-IMAGES/male0114.png
       ./media/CYBERFICTION-IMAGES/male0115.png
       ./media/CYBERFICTION-IMAGES/male0116.png
       ./media/CYBERFICTION-IMAGES/male0117.png
       ./media/CYBERFICTION-IMAGES/male0118.png
       ./media/CYBERFICTION-IMAGES/male0119.png
       ./media/CYBERFICTION-IMAGES/male0120.png
       ./media/CYBERFICTION-IMAGES/male0121.png
       ./media/CYBERFICTION-IMAGES/male0122.png
       ./media/CYBERFICTION-IMAGES/male0123.png
       ./media/CYBERFICTION-IMAGES/male0124.png
       ./media/CYBERFICTION-IMAGES/male0125.png
       ./media/CYBERFICTION-IMAGES/male0126.png
       ./media/CYBERFICTION-IMAGES/male0127.png
       ./media/CYBERFICTION-IMAGES/male0128.png
       ./media/CYBERFICTION-IMAGES/male0129.png
       ./media/CYBERFICTION-IMAGES/male0130.png
       ./media/CYBERFICTION-IMAGES/male0131.png
       ./media/CYBERFICTION-IMAGES/male0132.png
       ./media/CYBERFICTION-IMAGES/male0133.png
       ./media/CYBERFICTION-IMAGES/male0134.png
       ./media/CYBERFICTION-IMAGES/male0135.png
       ./media/CYBERFICTION-IMAGES/male0136.png
       ./media/CYBERFICTION-IMAGES/male0137.png
       ./media/CYBERFICTION-IMAGES/male0138.png
       ./media/CYBERFICTION-IMAGES/male0139.png
       ./media/CYBERFICTION-IMAGES/male0140.png
       ./media/CYBERFICTION-IMAGES/male0141.png
       ./media/CYBERFICTION-IMAGES/male0142.png
       ./media/CYBERFICTION-IMAGES/male0143.png
       ./media/CYBERFICTION-IMAGES/male0144.png
       ./media/CYBERFICTION-IMAGES/male0145.png
       ./media/CYBERFICTION-IMAGES/male0146.png
       ./media/CYBERFICTION-IMAGES/male0147.png
       ./media/CYBERFICTION-IMAGES/male0148.png
       ./media/CYBERFICTION-IMAGES/male0149.png
       ./media/CYBERFICTION-IMAGES/male0150.png
       ./media/CYBERFICTION-IMAGES/male0151.png
       ./media/CYBERFICTION-IMAGES/male0152.png
       ./media/CYBERFICTION-IMAGES/male0153.png
       ./media/CYBERFICTION-IMAGES/male0154.png
       ./media/CYBERFICTION-IMAGES/male0155.png
       ./media/CYBERFICTION-IMAGES/male0156.png
       ./media/CYBERFICTION-IMAGES/male0157.png
       ./media/CYBERFICTION-IMAGES/male0158.png
       ./media/CYBERFICTION-IMAGES/male0159.png
       ./media/CYBERFICTION-IMAGES/male0160.png
       ./media/CYBERFICTION-IMAGES/male0161.png
       ./media/CYBERFICTION-IMAGES/male0162.png
       ./media/CYBERFICTION-IMAGES/male0163.png
       ./media/CYBERFICTION-IMAGES/male0164.png
       ./media/CYBERFICTION-IMAGES/male0165.png
       ./media/CYBERFICTION-IMAGES/male0166.png
       ./media/CYBERFICTION-IMAGES/male0167.png
       ./media/CYBERFICTION-IMAGES/male0168.png
       ./media/CYBERFICTION-IMAGES/male0169.png
       ./media/CYBERFICTION-IMAGES/male0170.png
       ./media/CYBERFICTION-IMAGES/male0171.png
       ./media/CYBERFICTION-IMAGES/male0172.png
       ./media/CYBERFICTION-IMAGES/male0173.png
       ./media/CYBERFICTION-IMAGES/male0174.png
       ./media/CYBERFICTION-IMAGES/male0175.png
       ./media/CYBERFICTION-IMAGES/male0176.png
       ./media/CYBERFICTION-IMAGES/male0177.png
       ./media/CYBERFICTION-IMAGES/male0178.png
       ./media/CYBERFICTION-IMAGES/male0179.png
       ./media/CYBERFICTION-IMAGES/male0180.png
       ./media/CYBERFICTION-IMAGES/male0181.png
       ./media/CYBERFICTION-IMAGES/male0182.png
       ./media/CYBERFICTION-IMAGES/male0183.png
       ./media/CYBERFICTION-IMAGES/male0184.png
       ./media/CYBERFICTION-IMAGES/male0185.png
       ./media/CYBERFICTION-IMAGES/male0186.png
       ./media/CYBERFICTION-IMAGES/male0187.png
       ./media/CYBERFICTION-IMAGES/male0188.png
       ./media/CYBERFICTION-IMAGES/male0189.png
       ./media/CYBERFICTION-IMAGES/male0190.png
       ./media/CYBERFICTION-IMAGES/male0191.png
       ./media/CYBERFICTION-IMAGES/male0192.png
       ./media/CYBERFICTION-IMAGES/male0193.png
       ./media/CYBERFICTION-IMAGES/male0194.png
       ./media/CYBERFICTION-IMAGES/male0195.png
       ./media/CYBERFICTION-IMAGES/male0196.png
       ./media/CYBERFICTION-IMAGES/male0197.png
       ./media/CYBERFICTION-IMAGES/male0198.png
       ./media/CYBERFICTION-IMAGES/male0199.png
       ./media/CYBERFICTION-IMAGES/male0200.png
       ./media/CYBERFICTION-IMAGES/male0201.png
       ./media/CYBERFICTION-IMAGES/male0202.png
       ./media/CYBERFICTION-IMAGES/male0203.png
       ./media/CYBERFICTION-IMAGES/male0204.png
       ./media/CYBERFICTION-IMAGES/male0205.png
       ./media/CYBERFICTION-IMAGES/male0206.png
       ./media/CYBERFICTION-IMAGES/male0207.png
       ./media/CYBERFICTION-IMAGES/male0208.png
       ./media/CYBERFICTION-IMAGES/male0209.png
       ./media/CYBERFICTION-IMAGES/male0210.png
       ./media/CYBERFICTION-IMAGES/male0211.png
       ./media/CYBERFICTION-IMAGES/male0212.png
       ./media/CYBERFICTION-IMAGES/male0213.png
       ./media/CYBERFICTION-IMAGES/male0214.png
       ./media/CYBERFICTION-IMAGES/male0215.png
       ./media/CYBERFICTION-IMAGES/male0216.png
       ./media/CYBERFICTION-IMAGES/male0217.png
       ./media/CYBERFICTION-IMAGES/male0218.png
       ./media/CYBERFICTION-IMAGES/male0219.png
       ./media/CYBERFICTION-IMAGES/male0220.png
       ./media/CYBERFICTION-IMAGES/male0221.png
       ./media/CYBERFICTION-IMAGES/male0222.png
       ./media/CYBERFICTION-IMAGES/male0223.png
       ./media/CYBERFICTION-IMAGES/male0224.png
       ./media/CYBERFICTION-IMAGES/male0225.png
       ./media/CYBERFICTION-IMAGES/male0226.png
       ./media/CYBERFICTION-IMAGES/male0227.png
       ./media/CYBERFICTION-IMAGES/male0228.png
       ./media/CYBERFICTION-IMAGES/male0229.png
       ./media/CYBERFICTION-IMAGES/male0230.png
       ./media/CYBERFICTION-IMAGES/male0231.png
       ./media/CYBERFICTION-IMAGES/male0232.png
       ./media/CYBERFICTION-IMAGES/male0233.png
       ./media/CYBERFICTION-IMAGES/male0234.png
       ./media/CYBERFICTION-IMAGES/male0235.png
       ./media/CYBERFICTION-IMAGES/male0236.png
       ./media/CYBERFICTION-IMAGES/male0237.png
       ./media/CYBERFICTION-IMAGES/male0238.png
       ./media/CYBERFICTION-IMAGES/male0239.png
       ./media/CYBERFICTION-IMAGES/male0240.png
       ./media/CYBERFICTION-IMAGES/male0241.png
       ./media/CYBERFICTION-IMAGES/male0242.png
       ./media/CYBERFICTION-IMAGES/male0243.png
       ./media/CYBERFICTION-IMAGES/male0244.png
       ./media/CYBERFICTION-IMAGES/male0245.png
       ./media/CYBERFICTION-IMAGES/male0246.png
       ./media/CYBERFICTION-IMAGES/male0247.png
       ./media/CYBERFICTION-IMAGES/male0248.png
       ./media/CYBERFICTION-IMAGES/male0249.png
       ./media/CYBERFICTION-IMAGES/male0250.png
       ./media/CYBERFICTION-IMAGES/male0251.png
       ./media/CYBERFICTION-IMAGES/male0252.png
       ./media/CYBERFICTION-IMAGES/male0253.png
       ./media/CYBERFICTION-IMAGES/male0254.png
       ./media/CYBERFICTION-IMAGES/male0255.png
       ./media/CYBERFICTION-IMAGES/male0256.png
       ./media/CYBERFICTION-IMAGES/male0257.png
       ./media/CYBERFICTION-IMAGES/male0258.png
       ./media/CYBERFICTION-IMAGES/male0259.png
       ./media/CYBERFICTION-IMAGES/male0260.png
       ./media/CYBERFICTION-IMAGES/male0261.png
       ./media/CYBERFICTION-IMAGES/male0262.png
       ./media/CYBERFICTION-IMAGES/male0263.png
       ./media/CYBERFICTION-IMAGES/male0264.png
       ./media/CYBERFICTION-IMAGES/male0265.png
       ./media/CYBERFICTION-IMAGES/male0266.png
       ./media/CYBERFICTION-IMAGES/male0267.png
       ./media/CYBERFICTION-IMAGES/male0268.png
       ./media/CYBERFICTION-IMAGES/male0269.png
       ./media/CYBERFICTION-IMAGES/male0270.png
       ./media/CYBERFICTION-IMAGES/male0271.png
       ./media/CYBERFICTION-IMAGES/male0272.png
       ./media/CYBERFICTION-IMAGES/male0273.png
       ./media/CYBERFICTION-IMAGES/male0274.png
       ./media/CYBERFICTION-IMAGES/male0275.png
       ./media/CYBERFICTION-IMAGES/male0276.png
       ./media/CYBERFICTION-IMAGES/male0277.png
       ./media/CYBERFICTION-IMAGES/male0278.png
       ./media/CYBERFICTION-IMAGES/male0279.png
       ./media/CYBERFICTION-IMAGES/male0280.png
       ./media/CYBERFICTION-IMAGES/male0281.png
       ./media/CYBERFICTION-IMAGES/male0282.png
       ./media/CYBERFICTION-IMAGES/male0283.png
       ./media/CYBERFICTION-IMAGES/male0284.png
       ./media/CYBERFICTION-IMAGES/male0285.png
       ./media/CYBERFICTION-IMAGES/male0286.png
       ./media/CYBERFICTION-IMAGES/male0287.png
       ./media/CYBERFICTION-IMAGES/male0288.png
       ./media/CYBERFICTION-IMAGES/male0289.png
       ./media/CYBERFICTION-IMAGES/male0290.png
       ./media/CYBERFICTION-IMAGES/male0291.png
       ./media/CYBERFICTION-IMAGES/male0292.png
       ./media/CYBERFICTION-IMAGES/male0293.png
       ./media/CYBERFICTION-IMAGES/male0294.png
       ./media/CYBERFICTION-IMAGES/male0295.png
       ./media/CYBERFICTION-IMAGES/male0296.png
       ./media/CYBERFICTION-IMAGES/male0297.png
       ./media/CYBERFICTION-IMAGES/male0298.png
       ./media/CYBERFICTION-IMAGES/male0299.png
       ./media/CYBERFICTION-IMAGES/male0300.png
   `;
    return data.split("\n")[index];
  }

  const frameCount = 300;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page-1>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  ScrollTrigger.create({
    trigger: "#page-1>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });

  gsap.to("#page-2", {
    scrollTrigger: {
      trigger: `#page-2`,
      start: `top top`,
      end: `bottom top`,
      pin: true,
      scroller: `#main`,
    },
  });

  gsap.to("#page-3", {
    scrollTrigger: {
      trigger: `#page-3`,
      start: `top top`,
      end: `bottom top`,
      pin: true,
      scroller: `#main`,
    },
  });

  gsap.to("#page-4", {
    scrollTrigger: {
      trigger: `#page-4`,
      start: `top top`,
      end: `bottom top`,
      pin: true,
      scroller: `#main`,
    },
  });
}
canvasHTML();

Shery.mouseFollower();

Shery.makeMagnet(".magnet");

Shery.textAnimate(".text-target" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});