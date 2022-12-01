const materials = {
    lectures: [
         // Week 1
        'Introduction & Color',
        'Digital Image Processing',
         // Week 2
         'Sampling, Resampling & Warping',
        'Compositing & Morphing',
        // Week 3
        '3D Modeling',
        'Polygonal Meshes',
        // Week 4
        'Parametric Curves & Surfaces',
        'Subdivision Surfaces',
        // Week 5
        'Implicit Surfaces & Solid Models',
        'Scenes & Transformations',
        // Week 6
        'More On Transformations',
        '',
        // Week 7
        'Rendering & Raycasting',
        'Lighting & Reflectance',
        // Week 8
        'Global Illumination',
        'Non-photorealistic Rendering',
        // Week 9
        '3D Rasterization Pipeline',
        'Rasterization: Shading and Visibility',
        // Week 10
        'Passive Dynamics & Particle Systems',
        'Character Animation',
        // Week 11
        '3D Fabrication',
        'Final Project Logistics and Q&A in Class',
        // Week 12
        'Neural Rendering',
        '',
    ],
    precepts: [
        'Learning Javascript', // Week 1
        'Image Processing I', // Week 2
        'Image Processing II', // Week 3
        'Halfedge Structure', // Week 4
        'Mesh Processing', // Week 5
        'Online Open Office Hours (rescheduled for Wed, no Thu/Fri precept)', // Week 6
        'GLSL & Raytracing I', // Week 7
        'Raytracing II', // Week 8
        'Rasterization', // Week 9
        'Simulation & Animation', // Week 10
        'Web Graphics', // Week 11
        'Final Project Starter Code', // Week 12
    ],
    readings: [
        [{ text: 'Ch. 1, 2, & 19' }],
        [
            { link: 'Smith95b' },
            { selection: 'Sections 1–2 of', link: 'Paris09' },
        ], // Week 1
        [{ text: 'Ch. 6.15' }, { link: 'Hanrahan95' }],
        [{ text: 'Ch. 5.3' }, { link: 'Beier92' }], // Week 2
        [{ text: 'Ch. 13' }],
        [{ selection: 'Sections 1–3 of', link: 'Botsch07' }], // Week 3
        [{ text: 'Ch. 14' }],
        [{ selection: 'Sections 1, 2.1, 4, & 5 of', link: 'Zorin00' }], // Week 4
        [{ text: 'Ch. 15' }],
        [{ text: 'Ch. A.1, A.2, A.5, 7, 9, & 11' }], // Week 5
        [{ text: 'Ch. 8 & 10' }],
        [], // Week 6
        [{ text: 'Ch. 16 & 21.1' }],
        [{ text: 'Ch. 17–18' }], // Week 7
        [{ text: 'Ch. 21' }],
        [], // Week 8
        [{ text: 'Ch. 6' }],
        [], // Week 9
        [],
        [{ link: 'Reeves83' }, { link: 'Witkin01a' }, { link: 'Witkin01b' }], // Week 10
        [],
        [], // Week 11
        [],
        [], // Week 12
    ],
    other: [
        {
            title: 'Exam',
            due: { week: 6, day: 'Thursday' },
            readings: [
                {selection: 'Old exams:', link: 'Exam1-2017'},
                {link: 'Exam1-2012'},
                {link: 'Exam1-2011'}
            ],
        },
        {
            title: 'Project Proposals',
            due: { week: 12, day: 'Thursday' },
            readings: [],
        },
        {
            title:
                'Final Project Presentations (Scheduling and Logistics TBD)',
            due: { week: 13, day: 'Wednesday' },
            readings: [],
        },
        {
            title:
                'Final Project Presentations (Scheduling and Logistics TBD)',
            due: { week: 13, day: 'Thursday' },
            readings: [],
        },
    ],
};

export default materials;
