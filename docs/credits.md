---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/andriemc.png',
    name: 'Andrew',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/andriemc' },
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Credits
    </template>
    <template #lead>
		Staple is possible because all of the people below!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>