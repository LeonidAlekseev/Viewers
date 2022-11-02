import React from 'react';

/**
 *
 * Note: this is an example of how the customization module can be used
 * using the customization module. Below, we are adding a new custom route
 * to the application at the path /custom and rendering a custom component
 * Real world use cases of the having a custom route would be to add a
 * custom page for the user to view their profile, or to add a custom
 * page for login etc.
 */
export default function getCustomizationModule() {
  return [
    {
      name: 'customRoutes',
      value: {
        id: 'customRoutes',
        routes: [
          {
            path: '/custom',
            children: () => <h1>Hello Custom Route</h1>,
          },
        ],
      },
    },
  ];
}
