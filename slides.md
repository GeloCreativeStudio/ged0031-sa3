---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://c4.wallpaperflare.com/wallpaper/620/961/208/computer-engineering-science-tech-wallpaper-preview.jpg
# some information about your slides (markdown enabled)
title: Mark Rober - Vlogger Analysis
info: |
  ## Mark Rober Vlogger Analysis
  SA3 Presentation - Engineering Entertainment

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# Enable automatic light/dark mode switching
colorSchema: 'auto'
# Google Fonts configuration
fonts:
  # Body text - serif
  serif: Merriweather
  # Headings - sans-serif
  sans: Montserrat
  # Code blocks, inline code, technical text - monospace
  mono: Source Code Pro
  # Request specific weights for Montserrat
  weights:
    sans: '300,400,500,600,700,900' # Light, Regular, Medium, SemiBold, Bold, Black
  # Request italics for Merriweather
  italic:
    serif: true
---

# Engineering Entertainment
## Vlogger Analysis

*From NASA to YouTube Stardom*

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover:bg="white op-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:logo-github />
  </a>
</div>

<!--
Welcome everyone! Today we're diving into the fascinating world of Mark Rober - a former NASA engineer who became one of YouTube's most beloved science educators. But first, let's warm up with a fun activity!
-->

---
transition: fade-out
layout: center
class: text-center
---

# 🎯 Mini Game Time!
## Science Emoji Challenge

<div class="text-6xl mb-8">
🚀 + 🔬 + 📱 = ?
</div>

<div v-click class="text-2xl text-blue-400 font-bold">
Mark Rober!
</div>

<div v-click class="mt-8 text-lg">
*NASA Engineer turned YouTube Science Star*
</div>

<!--
Let's start with a quick brain teaser! Can you guess what these emojis represent when combined? 
[Wait for audience responses]
That's right - it's Mark Rober! A rocket scientist who uses laboratory experiments and mobile technology to create amazing content!
-->

---
layout: center
class: text-center
---

# 🎬 Jelly Bean Guessing Game HACK
## Meet Mark Rober in Action

<div class="aspect-video w-full max-w-4xl mx-auto mb-6">
  <iframe 
    src="https://www.youtube.com/embed/iBh3zOjOCvI" 
    title="Jelly Bean Guessing Game HACK" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    class="w-full h-full rounded-lg shadow-lg">
  </iframe>
</div>

<div v-click class="text-lg space-y-2">
  <div>🧠 Engineering mindset meets carnival games</div>
  <div>📐 Mathematical approach to guessing</div>
  <div>🎯 Problem-solving in under 60 seconds</div>
</div>

<!--
Here's Mark Rober in action! This short video perfectly demonstrates his approach - taking a simple carnival game and applying engineering principles to solve it. Notice how he breaks down the problem systematically, just like he does in all his content.
-->

---
layout: two-cols
layoutClass: gap-16
---

# 👨‍🚀 Who is Mark Rober?

<div class="space-y-4">
  <div v-click="1" class="flex items-center gap-2">
    <carbon:user class="text-blue-500" />
    <span>American YouTuber and Engineer</span>
  </div>
  
  <div v-click="2" class="flex items-center gap-2">
    <carbon:rocket class="text-red-500" />
    <span>9 Years at NASA JPL</span>
  </div>
  
  <div v-click="3" class="flex items-center gap-2">
    <carbon:mobile class="text-gray-500" />
    <span>4 Years at Apple Inc</span>
  </div>
  
  <div v-click="4" class="flex items-center gap-2">
    <carbon:video class="text-green-500" />
    <span>Science Education Content Creator</span>
  </div>
</div>

::right::

# 📊 By the Numbers

<div class="space-y-6">
  <div v-click="5" class="text-center">
    <div class="text-4xl font-bold text-red-500">68.5M</div>
    <div class="text-sm">YouTube Subscribers</div>
  </div>
  
  <div v-click="6" class="text-center">
    <div class="text-4xl font-bold text-blue-500">12.2B</div>
    <div class="text-sm">Total Video Views</div>
  </div>
  
  <div v-click="7" class="text-center">
    <div class="text-4xl font-bold text-green-500">2011</div>
    <div class="text-sm">YouTube Journey Started</div>
  </div>
</div>

<!--
Mark Rober isn't just any YouTuber - he's a legitimate rocket scientist! He spent 9 years at NASA working on the Mars Curiosity rover, then 4 years at Apple developing VR technology. His numbers are staggering - nearly 70 million subscribers and over 12 billion views since starting in 2011.
-->

---
layout: center
class: text-center
---

# 🎯 Content & Audience

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-6xl mx-auto">
  <div v-click="1" class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
    <h3 class="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Content Focus</h3>
    <ul class="text-left space-y-3 text-gray-700 dark:text-gray-300">
      <li class="p-2 rounded">Popular Science Experiments</li>
      <li class="p-2 rounded">DIY Engineering Projects</li>
      <li class="p-2 rounded">Educational Entertainment</li>
      <li class="p-2 rounded">Problem-Solving Adventures</li>
    </ul>
  </div>
  
  <div v-click="2" class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
    <h3 class="text-xl font-bold mb-4 text-green-600 dark:text-green-400">Target Audience</h3>
    <ul class="text-left space-y-3 text-gray-700 dark:text-gray-300">
      <li class="p-2 rounded">Science Enthusiasts</li>
      <li class="p-2 rounded">STEM Students</li>
      <li class="p-2 rounded">Curious Minds (All Ages)</li>
      <li class="p-2 rounded">Engineering Professionals</li>
    </ul>
  </div>
</div>

<!--
Mark's content brilliantly bridges the gap between complex engineering and accessible entertainment. He targets anyone with curiosity about how things work, from kids fascinated by his squirrel mazes to adults amazed by his glitter bomb engineering.
-->

---
layout: image-right
image: https://www.crunchlabs.com/cdn/shop/files/mark-nasa-shirt_1_3x_509ac96a-f1f2-4e7f-a1e8-b83d5b10248c.webp?v=1711497523
---

# 💼 Business Ventures

<div class="space-y-4">
  <div class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
    <h3 class="font-bold text-purple-600 dark:text-purple-400">Digital Dudz (2012)</h3>
    <p class="text-sm text-gray-700 dark:text-gray-300">Halloween costume company</p>
    <p class="text-xs text-purple-600 dark:text-purple-400">$250K revenue in 3 weeks</p>
  </div>
  
  <div class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
    <h3 class="font-bold text-blue-600 dark:text-blue-400">CrunchLabs (2022)</h3>
    <p class="text-sm text-gray-700 dark:text-gray-300">STEM education subscription boxes</p>
    <p class="text-xs text-blue-600 dark:text-blue-400">Hands-on learning experiences</p>
  </div>
  
  <div class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
    <h3 class="font-bold text-green-600 dark:text-green-400">TeamTrees & TeamSeas</h3>
    <p class="text-sm text-gray-700 dark:text-gray-300">Environmental initiatives with MrBeast</p>
    <p class="text-xs text-green-600 dark:text-green-400">$54M+ raised combined</p>
  </div>
</div>

<!--
Mark doesn't just create content - he builds businesses around his passion for education and innovation. From his early Halloween costume success to his current STEM education company, he's proven that science communication can be both impactful and profitable.
-->

---
layout: center
class: text-center
---

# 🏆 Most Viewed Video
## "World's Largest Jello Pool"

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-4xl mx-auto">
  <div class="text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
    <div class="text-4xl font-bold text-red-500">190M</div>
    <div class="text-sm text-gray-700 dark:text-gray-300">Views</div>
  </div>
  
  <div class="text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
    <div class="text-4xl font-bold text-blue-500">YouTube</div>
    <div class="text-sm text-gray-700 dark:text-gray-300">Platform</div>
  </div>
  
  <div class="text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
    <div class="text-4xl font-bold text-green-500">Science</div>
    <div class="text-sm text-gray-700 dark:text-gray-300">Category</div>
  </div>
</div>

<div class="mt-8 text-lg">
*Can you actually swim in Jello?*
</div>

<!--
His most successful video perfectly embodies what makes Mark Rober special - taking a silly question that everyone's wondered about and applying serious scientific methodology to find the answer. 190 million people wanted to know if you can swim in Jello!
-->

---
layout: two-cols
layoutClass: gap-16
---

# ✅ 7 Qualities Assessment
## Most Viewed Video

<div class="space-y-3">
  <div v-click="1" class="flex items-center gap-2 p-2 rounded">
    <div class="w-4 h-4 bg-green-500 rounded-full"></div>
    <span class="font-semibold">Engaging</span>
    <span class="text-sm text-gray-600 dark:text-gray-400">- Unique premise</span>
  </div>
  
  <div v-click="2" class="flex items-center gap-2 p-2 rounded">
    <div class="w-4 h-4 bg-green-500 rounded-full"></div>
    <span class="font-semibold">Reliable</span>
    <span class="text-sm text-gray-600 dark:text-gray-400">- NASA engineer accuracy</span>
  </div>
  
  <div v-click="3" class="flex items-center gap-2 p-2 rounded">
    <div class="w-4 h-4 bg-green-500 rounded-full"></div>
    <span class="font-semibold">Useful</span>
    <span class="text-sm text-gray-600 dark:text-gray-400">- Teaches fluid dynamics</span>
  </div>
  
  <div v-click="4" class="flex items-center gap-2 p-2 rounded">
    <div class="w-4 h-4 bg-green-500 rounded-full"></div>
    <span class="font-semibold">Concise</span>
    <span class="text-sm text-gray-600 dark:text-gray-400">- Well-paced narrative</span>
  </div>
</div>

::right::

<div class="space-y-3">
  <div v-click="5" class="flex items-center gap-2 p-2 rounded">
    <div class="w-4 h-4 bg-green-500 rounded-full"></div>
    <span class="font-semibold">Clear</span>
    <span class="text-sm text-gray-600 dark:text-gray-400">- Simple explanations</span>
  </div>
  
  <div v-click="6" class="flex items-center gap-2 p-2 rounded">
    <div class="w-4 h-4 bg-green-500 rounded-full"></div>
    <span class="font-semibold">Ethical</span>
    <span class="text-sm text-gray-600 dark:text-gray-400">- Responsible experiments</span>
  </div>
  
  <div v-click="7" class="flex items-center gap-2 p-2 rounded">
    <div class="w-4 h-4 bg-green-500 rounded-full"></div>
    <span class="font-semibold">Well-edited</span>
    <span class="text-sm text-gray-600 dark:text-gray-400">- High production quality</span>
  </div>
</div>

<div v-click="8" class="mt-8 text-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
  <div class="text-2xl font-bold text-green-600">7/7</div>
  <div class="text-sm text-gray-700 dark:text-gray-300">Perfect Score!</div>
</div>

<!--
When we evaluate this video against the 7 qualities of good vlogging, it scores perfectly. The engaging premise hooks viewers, the reliable science builds trust, and the clear explanations make complex concepts accessible. The high production value and ethical approach set the standard for educational content.
-->

---
layout: center
class: text-center
---

# 📉 Least Viewed Analysis
## "Mark Rober & Demi Lovato Perform 'Confident'"

<div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 max-w-6xl mx-auto">
  <div v-click="1" class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
    <h3 class="text-xl font-bold mb-4 text-red-600 dark:text-red-400">Why Least Viewed?</h3>
    <ul class="text-left space-y-3 text-sm text-gray-700 dark:text-gray-300">
      <li class="p-2 rounded">Content divergence from science</li>
      <li class="p-2 rounded">Collaboration on another channel</li>
      <li class="p-2 rounded">Musical performance vs experiments</li>
      <li class="p-2 rounded">Different audience expectations</li>
    </ul>
  </div>
  
  <div v-click="2" class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
    <h3 class="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Key Differences</h3>
    <ul class="text-left space-y-3 text-sm text-gray-700 dark:text-gray-300">
      <li class="p-2 rounded">278K vs 190M views</li>
      <li class="p-2 rounded">Entertainment vs education focus</li>
      <li class="p-2 rounded">Talk show format</li>
      <li class="p-2 rounded">No engineering elements</li>
    </ul>
  </div>
</div>

<!--
The contrast is striking - his least viewed video shows what happens when content doesn't align with audience expectations. While the Demi Lovato collaboration was entertaining, Mark's audience comes for science and engineering, not musical performances. This teaches us the importance of staying true to your brand.
-->

---
layout: center
class: text-center
---

# 🎯 Success Formula

<div v-click="1" class="text-6xl mb-8">
🧪 + 🎬 + 📚 = 🌟
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg max-w-4xl mx-auto">
  <div v-click="2" class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
    <div class="font-bold text-blue-600 dark:text-blue-400">Science</div>
    <div class="text-sm text-gray-700 dark:text-gray-300">Rigorous methodology</div>
  </div>
  
  <div v-click="3" class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
    <div class="font-bold text-red-600 dark:text-red-400">Entertainment</div>
    <div class="text-sm text-gray-700 dark:text-gray-300">Engaging presentation</div>
  </div>
  
  <div v-click="4" class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
    <div class="font-bold text-green-600 dark:text-green-400">Education</div>
    <div class="text-sm text-gray-700 dark:text-gray-300">Learning outcomes</div>
  </div>
</div>

<div v-click="5" class="mt-8 text-xl font-semibold">
*Making Science Accessible to Everyone*
</div>

<!--
Mark Rober's success comes from his unique formula: combining rigorous scientific methodology with entertaining presentation and clear educational value. He proves that learning doesn't have to be boring - it can be the most exciting thing you do all day.
-->

---
layout: default
---

# 💡 Key Takeaways

<div class="space-y-6 text-lg max-w-4xl">
  <div v-click="1" class="flex items-center gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
    <carbon:checkmark-filled class="text-green-500 text-2xl flex-shrink-0" />
    <span>Authenticity drives engagement</span>
  </div>
  
  <div v-click="2" class="flex items-center gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
    <carbon:checkmark-filled class="text-green-500 text-2xl flex-shrink-0" />
    <span>Education can be entertaining</span>
  </div>
  
  <div v-click="3" class="flex items-center gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
    <carbon:checkmark-filled class="text-green-500 text-2xl flex-shrink-0" />
    <span>Consistency builds trust</span>
  </div>
  
  <div v-click="4" class="flex items-center gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
    <carbon:checkmark-filled class="text-green-500 text-2xl flex-shrink-0" />
    <span>Quality over quantity wins</span>
  </div>
</div>

<!--
From Mark Rober's journey, we learn that successful vlogging isn't about following trends - it's about being authentic to your expertise and passion. When you combine genuine knowledge with creative presentation, you create content that both entertains and educates.
-->

---
layout: center
class: text-center
---

# 🙏 Thank You!

<div class="mb-8">
  <div class="text-2xl font-bold mb-4">Fantastic 4</div>

</div>

## Group Members

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
    <div class="flex items-center gap-3 mb-2">
      <carbon:code class="text-blue-500 text-xl" />
      <div>
        <div class="font-semibold">Angelo Manalo</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">BSCSAI</div>
        <a href="https://www.angelomanalo.me/" class="text-xs text-blue-500 hover:underline">angelomanalo.me</a>
      </div>
    </div>
  </div>
  
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
    <div class="flex items-center gap-3 mb-2">
      <carbon:chip class="text-green-500 text-xl" />
      <div>
        <div class="font-semibold">Ivan Paul Bancod</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">BSCpE</div>
      </div>
    </div>
  </div>
  
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
    <div class="flex items-center gap-3 mb-2">
      <carbon:settings class="text-orange-500 text-xl" />
      <div>
        <div class="font-semibold">Paul Benedict Castillo</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">BSME</div>
      </div>
    </div>
  </div>
  
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
    <div class="flex items-center gap-3 mb-2">
      <carbon:settings class="text-orange-500 text-xl" />
      <div>
        <div class="font-semibold">Benj Zaragoza</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">BSME</div>
      </div>
    </div>
  </div>
</div>

<div class="mt-8 text-sm opacity-75">
*From NASA to YouTube: Engineering the Future of Education*
</div>

<!--
Thank you for joining us on this analysis of Mark Rober's incredible journey from NASA engineer to YouTube superstar. We are the Fantastic 4, and we hope this presentation has shown you how passion, expertise, and creativity can truly change the world - one experiment at a time.
-->