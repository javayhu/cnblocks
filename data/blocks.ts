import fs from 'fs'
import path from 'path'

export interface Block {
    slug: string
    title: string
    category: string
    preview: string
    code: string
}

function loadCode(filePath: string): string {
    const fullPath = path.join(process.cwd(), filePath)
    return fs.readFileSync(fullPath, 'utf-8')
}

export const blocks: Block[] = [
    {
        slug: 'hero-section',
        title: 'one',
        category: 'hero-section',
        preview: '/preview/hero-section/one',
        code: loadCode('app/preview/hero-section/one/page.tsx'),
    },
    {
        slug: 'hero-section',
        title: 'two',
        category: 'hero-section',
        preview: '/preview/hero-section/two',
        code: loadCode('app/preview/hero-section/two/page.tsx'),
    },
    {
        slug: 'hero-section',
        title: 'three',
        category: 'hero-section',
        preview: '/preview/hero-section/three',
        code: loadCode('app/preview/hero-section/three/page.tsx'),
    },
    {
        slug: 'hero-section',
        title: 'four',
        category: 'hero-section',
        preview: '/preview/hero-section/four',
        code: loadCode('app/preview/hero-section/four/page.tsx'),
    },
    {
        slug: 'logo-cloud',
        title: 'one',
        category: 'logo-cloud',
        preview: '/preview/logo-cloud/one',
        code: loadCode('app/preview/logo-cloud/one/page.tsx'),
    },
    {
        slug: 'features',
        title: 'one',
        category: 'features',
        preview: '/preview/features/one',
        code: loadCode('app/preview/features/one/page.tsx'),
    },
    {
        slug: 'features',
        title: 'two',
        category: 'features',
        preview: '/preview/features/two',
        code: loadCode('app/preview/features/two/page.tsx'),
    },
    {
        slug: 'features',
        title: 'three',
        category: 'features',
        preview: '/preview/features/three',
        code: loadCode('app/preview/features/three/page.tsx'),
    },
    {
        slug: 'features',
        title: 'four',
        category: 'features',
        preview: '/preview/features/four',
        code: loadCode('app/preview/features/four/page.tsx'),
    },
    {
        slug: 'features',
        title: 'five',
        category: 'features',
        preview: '/preview/features/five',
        code: loadCode('app/preview/features/five/page.tsx'),
    },
    {
        slug: 'features',
        title: 'six',
        category: 'features',
        preview: '/preview/features/six',
        code: loadCode('app/preview/features/six/page.tsx'),
    },
    {
        slug: 'features',
        title: 'seven',
        category: 'features',
        preview: '/preview/features/seven',
        code: loadCode('app/preview/features/seven/page.tsx'),
    },
    {
        slug: 'features',
        title: 'eight',
        category: 'features',
        preview: '/preview/features/eight',
        code: loadCode('app/preview/features/eight/page.tsx'),
    },

    {
        slug: 'content',
        title: 'one',
        category: 'content',
        preview: '/preview/content/one',
        code: loadCode('app/preview/content/one/page.tsx'),
    },
    {
        slug: 'content',
        title: 'seven',
        category: 'content',
        preview: '/preview/content/seven',
        code: loadCode('app/preview/content/seven/page.tsx'),
    },
    {
        slug: 'content',
        title: 'two',
        category: 'content',
        preview: '/preview/content/two',
        code: loadCode('app/preview/content/two/page.tsx'),
    },
    {
        slug: 'content',
        title: 'three',
        category: 'content',
        preview: '/preview/content/three',
        code: loadCode('app/preview/content/three/page.tsx'),
    },
    {
        slug: 'content',
        title: 'four',
        category: 'content',
        preview: '/preview/content/four',
        code: loadCode('app/preview/content/four/page.tsx'),
    },
    {
        slug: 'content',
        title: 'five',
        category: 'content',
        preview: '/preview/content/five',
        code: loadCode('app/preview/content/five/page.tsx'),
    },
    {
        slug: 'content',
        title: 'six',
        category: 'content',
        preview: '/preview/content/six',
        code: loadCode('app/preview/content/six/page.tsx'),
    },
    {
        slug: 'stats',
        title: 'one',
        category: 'stats',
        preview: '/preview/stats/one',
        code: loadCode('app/preview/stats/one/page.tsx'),
    },
    {
        slug: 'stats',
        title: 'two',
        category: 'stats',
        preview: '/preview/stats/two',
        code: loadCode('app/preview/stats/two/page.tsx'),
    },
    {
        slug: 'stats',
        title: 'three',
        category: 'stats',
        preview: '/preview/stats/three',
        code: loadCode('app/preview/stats/three/page.tsx'),
    },
    {
        slug: 'stats',
        title: 'four',
        category: 'stats',
        preview: '/preview/stats/four',
        code: loadCode('app/preview/stats/four/page.tsx'),
    },
    {
        slug: 'team',
        title: 'one',
        category: 'team',
        preview: '/preview/team/one',
        code: loadCode('app/preview/team/one/page.tsx'),
    },
    {
        slug: 'team',
        title: 'two',
        category: 'team',
        preview: '/preview/team/two',
        code: loadCode('app/preview/team/two/page.tsx'),
    },

    {
        slug: 'testimonials',
        title: 'one',
        category: 'testimonials',
        preview: '/preview/testimonials/one',
        code: loadCode('app/preview/testimonials/one/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'two',
        category: 'testimonials',
        preview: '/preview/testimonials/two',
        code: loadCode('app/preview/testimonials/two/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'three',
        category: 'testimonials',
        preview: '/preview/testimonials/three',
        code: loadCode('app/preview/testimonials/three/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'four',
        category: 'testimonials',
        preview: '/preview/testimonials/four',
        code: loadCode('app/preview/testimonials/four/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'five',
        category: 'testimonials',
        preview: '/preview/testimonials/five',
        code: loadCode('app/preview/testimonials/five/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'six',
        category: 'testimonials',
        preview: '/preview/testimonials/six',
        code: loadCode('app/preview/testimonials/six/page.tsx'),
    },


    {
        slug: 'call-to-action',
        title: 'one',
        category: 'call-to-action',
        preview: '/preview/call-to-action/one',
        code: loadCode('app/preview/call-to-action/one/page.tsx'),
    },
    {
        slug: 'call-to-action',
        title: 'two',
        category: 'call-to-action',
        preview: '/preview/call-to-action/two',
        code: loadCode('app/preview/call-to-action/two/page.tsx'),
    },
    {
        slug: 'call-to-action',
        title: 'three',
        category: 'call-to-action',
        preview: '/preview/call-to-action/three',
        code: loadCode('app/preview/call-to-action/three/page.tsx'),
    },

    {
        slug: 'footer',
        title: 'one',
        category: 'footer',
        preview: '/preview/footer/one',
        code: loadCode('app/preview/footer/one/page.tsx'),
    },
    {
        slug: 'footer',
        title: 'two',
        category: 'footer',
        preview: '/preview/footer/two',
        code: loadCode('app/preview/footer/two/page.tsx'),
    },
    {
        slug: 'footer',
        title: 'three',
        category: 'footer',
        preview: '/preview/footer/three',
        code: loadCode('app/preview/footer/three/page.tsx'),
    },
    {
        slug: 'footer',
        title: 'four',
        category: 'footer',
        preview: '/preview/footer/four',
        code: loadCode('app/preview/footer/four/page.tsx'),
    },
    {
        slug: 'footer',
        title: 'five',
        category: 'footer',
        preview: '/preview/footer/five',
        code: loadCode('app/preview/footer/five/page.tsx'),
    },

    {
        slug: 'pricing',
        title: 'one',
        category: 'pricing',
        preview: '/preview/pricing/one',
        code: loadCode('app/preview/pricing/one/page.tsx'),
    },
    {
        slug: 'pricing',
        title: 'two',
        category: 'pricing',
        preview: '/preview/pricing/two',
        code: loadCode('app/preview/pricing/two/page.tsx'),
    },
    {
        slug: 'pricing',
        title: 'three',
        category: 'pricing',
        preview: '/preview/pricing/three',
        code: loadCode('app/preview/pricing/three/page.tsx'),
    },
    {
        slug: 'pricing',
        title: 'four',
        category: 'pricing',
        preview: '/preview/pricing/four',
        code: loadCode('app/preview/pricing/four/page.tsx'),
    },
    {
        slug: 'pricing',
        title: 'five',
        category: 'pricing',
        preview: '/preview/pricing/five',
        code: loadCode('app/preview/pricing/five/page.tsx'),
    },

    {
        slug: 'comparator',
        title: 'one',
        category: 'comparator',
        preview: '/preview/comparator/one',
        code: loadCode('app/preview/comparator/one/page.tsx'),
    },

    {
        slug: 'faqs',
        title: 'one',
        category: 'faqs',
        preview: '/preview/faqs/one',
        code: loadCode('app/preview/faqs/one/page.tsx'),
    },

    {
        slug: 'login',
        title: 'one',
        category: 'login',
        preview: '/preview/login/one',
        code: loadCode('app/preview/login/one/page.tsx'),
    },
    {
        slug: 'login',
        title: 'two',
        category: 'login',
        preview: '/preview/login/two',
        code: loadCode('app/preview/login/two/page.tsx'),
    },
    {
        slug: 'login',
        title: 'three',
        category: 'login',
        preview: '/preview/login/three',
        code: loadCode('app/preview/login/three/page.tsx'),
    },

    {
        slug: 'sign-up',
        title: 'one',
        category: 'sign-up',
        preview: '/preview/sign-up/one',
        code: loadCode('app/preview/sign-up/one/page.tsx'),
    },
    {
        slug: 'sign-up',
        title: 'two',
        category: 'sign-up',
        preview: '/preview/sign-up/two',
        code: loadCode('app/preview/sign-up/two/page.tsx'),
    },
    {
        slug: 'sign-up',
        title: 'three',
        category: 'sign-up',
        preview: '/preview/sign-up/three',
        code: loadCode('app/preview/sign-up/three/page.tsx'),
    },
]

export const categories = [...new Set(blocks.map((b) => b.category))]