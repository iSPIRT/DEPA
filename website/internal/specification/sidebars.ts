module.exports = {
  specification: [
    'about-spec',
    'entity-resolution',
    'data-provider-discovery',
    'mtls-establishment',
    {
      type: 'category',
      label: 'Linking',
      collapsed: true,
      items: [
        'linking/linking-flow',
        'linking/cm-init-link',
        'linking/dp-init-link',
      ],
    },
    {
      type: 'category',
      label: 'Flows',
      collapsed: true,
      items: [
        'flows/consent-flow',
        'flows/data-flow',
        'flows/guardian-flow',
        'flows/nominee-flow',
      ],
    },
  ],
};
