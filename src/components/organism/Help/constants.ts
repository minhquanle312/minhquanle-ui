import { title } from 'process';
import { ITabShareScreenProps } from './types';
import { generateUniqueId } from 'src/components/molecules/CaptureScreen/utils';
import { ControlPositionProps } from 'src/components/molecules/CaptureScreen/types';

export const TICKET_CUSTOM_MESSAGE_KEY = 'TICKET_CUSTOM_MESSAGE_KEY';
export const PORTALS_ANTSOMI_PACKAGE_UI_KEY = 'PORTALS_ANTSOMI_PACKAGE_UI_KEY';
export const PORTALS_ANTSOMI_PACKAGE_UI_KEY_POPUP = 'PORTALS_ANTSOMI_PACKAGE_UI_KEY_POPUP';

export const MESSAGE_TYPE = {
  TICKET_CREATE_STATUS: 'TICKET_CREATE_STATUS',
};
export enum MENU_KEYS {
  FEATURE_ANNOUNCEMENT = 'feature_announcement',
  FEEDBACK = 'feedback',
  HELP = 'help',
  IDEA = 'idea',
  SUPPORT = 'support',
  CHAT = 'chat',
}

export enum ATTACH_KEYS {
  CAPTURE = 'capture',
  RECORD = 'record',
}

export enum REPORT_TYPES {
  FEEDBACK = 'feedback',
  ISSUE = 'issue',
  IDEA = 'idea',
  HELP = 'help',
  CHAT = 'chat',
  HELP_V1 = 'help_v1',
}

export const ATTACH_CAPTURE_TYPES = [
  {
    key: ATTACH_KEYS.CAPTURE,
    label: 'Capture a screenshot',
    icon: 'icon-ants-capture',
    actions: [
      {
        key: 'edit',
        icon: 'icon-ants-pencil',
      },
      {
        key: 'delete',
        icon: 'icon-ants-trash-outline',
      },
    ],
  },
  {
    key: ATTACH_KEYS.RECORD,
    label: 'Record your screen',
    icon: 'icon-ants-camera',
    actions: [
      {
        key: 'edit',
        icon: 'icon-ants-pencil',
      },
      {
        key: 'delete',
        icon: 'icon-ants-trash-outline',
      },
    ],
  },
];

export const DEFAULT_POSITIONS: ControlPositionProps = {
  [ATTACH_KEYS.CAPTURE]: {
    x: 250,
    y: 0,
  },
  [ATTACH_KEYS.RECORD]: {
    x: 82,
    y: 0,
  },
};

export const TABS_SHARING_SCREEN: ITabShareScreenProps[] = [
  {
    label: 'This Tab',
    key: 'current',
    children: 'Content current',
  },
  {
    label: 'Other tab',
    key: 'other',
  },
  {
    label: 'Window',
    key: 'window',
  },
  {
    label: 'Entire Screen',
    key: 'entire',
  },
];
export const HELP_APP = [
  {
    title: 'Personas',
    key: generateUniqueId(),
    appCode: 'APP_CUSTOMER_360',
    children: [
      {
        title: 'Visitors',
        key: generateUniqueId(),
        children: [
          {
            title: 'Visitors & Customers',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/personas/visitors-and-customers',
          },
          {
            title: 'How to create "Attribute" for "Customer"/"Visitors"?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/personas/how-to-create-attribute-for-customer-visitors',
          },
        ],
      },
      {
        title: 'Customers',
        key: generateUniqueId(),
        children: [
          {
            title: 'Visitors & Customers',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/personas/visitors-and-customers',
            // children: [{ title: 'sss', key: '0-0-1-1-0' }],
          },
          {
            title: 'How to add new and update Customers to CDP',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/personas/visitors-customers/how-to-add-new-and-update-customers-to-cdp',
          },
          {
            title: 'How to create a Customer Custom Attribute',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/personas/visitors-customers/how-to-create-a-customer-custom-attribute',
          },
          {
            title: 'How to create a Customer Computed-Last Attribute',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/personas/visitors-customers/how-to-create-a-customer-computed-last-attribute',
          },
          {
            title: 'How to create "Attribute" for "Customer"/"Visitors"?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/personas/how-to-create-attribute-for-customer-visitors',
          },
        ],
      },
      {
        title: 'Segment',
        key: generateUniqueId(),
        children: [
          {
            title: 'Segments',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/personas/segments',
          },
          {
            title: 'How to export .xml file?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/personas/segments/how-to-export-.xml-file',
          },
          {
            title: 'How to create a Dynamic Segment',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/personas/segments/how-to-create-a-dynamic-segment',
          },
          {
            title: 'How to create a Static Segment (Matching file)',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/personas/segments/how-to-create-a-static-segment-matching-file',
          },
          {
            title: 'How to create a new segment?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/personas/segments/how-to-create-a-new-segment',
          },
          {
            title: 'Create a segment for Cart Abandonment',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/personas/segments/create-a-segment-for-cart-abandonment',
          },
          {
            title: 'Set up a "Segment" containing emails to be excluded before sending mail',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/personas/segments/set-up-a-segment-containing-emails-to-be-excluded-before-sending-mail',
          },
        ],
      },
      {
        title: 'Plannings',
        key: generateUniqueId(),
        children: [
          {
            title: 'Plannings',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/personas/plannings',
          },
        ],
      },
    ],
  },
  {
    title: 'Data Hub',
    key: generateUniqueId(),
    appCode: 'APP_API_HUB',
    children: [
      {
        title: 'Event Sources',
        key: generateUniqueId(),
        children: [
          {
            title: 'Event Sources',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/event-sources',
          },
          {
            title: 'Set up Event Tracking code to track events into CDP',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/event-sources/set-up-event-tracking-code-to-track-events-into-cdp',
          },
          {
            title: 'List of Events',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/event-sources/list-of-events',
          },
          {
            title: 'Set up Event Tracking code to track events into CDP',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/data-hub/event-sources/set-up-event-tracking-code-to-track-events-into-cdp',
          },
        ],
      },
      {
        title: 'Business Objects',
        key: generateUniqueId(),
        children: [
          {
            title: 'Business Objects',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects',
          },
          {
            title: 'Business Objects (Detail)',
            key: generateUniqueId(),
            children: [
              {
                title: 'Business Objects (Detail)',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects',
              },
              {
                title: 'Data table',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/data-table',
              },
              {
                title: 'Attributes',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/attributes',
              },
              {
                title: 'Custom Attribute',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/attributes/custom-attribute',
              },
              {
                title: 'Computed Attribute',
                key: generateUniqueId(),
                children: [
                  {
                    title: 'Computed Attribute',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/attributes/computed-attribute',
                  },
                  {
                    title: 'Event Counter',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/attributes/computed-attribute/event-counter',
                  },
                  {
                    title: 'Aggregation',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/attributes/computed-attribute/aggregation',
                  },
                  {
                    title: 'Most Frequent',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/attributes/computed-attribute/most-frequent',
                  },
                  {
                    title: 'First',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/attributes/computed-attribute/first',
                  },
                  {
                    title: 'Last',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/attributes/computed-attribute/last',
                  },
                  {
                    title: 'Unique List',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/attributes/computed-attribute/unique-list',
                  },
                  {
                    title: 'Unique List Count',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/attributes/computed-attribute/unique-list-count',
                  },
                  {
                    title: 'Conversion Attribution',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/attributes/computed-attribute/conversion-attribution',
                  },
                  {
                    title: 'Virtual Custom Function',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/attributes/computed-attribute/virtual-custom-function',
                  },
                  {
                    title: 'Schedule Custom Function',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/attributes/computed-attribute/schedule-custom-function',
                  },
                ],
              },
              {
                title: 'Collections',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/collections',
              },
              {
                title: 'Groups',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/groups',
              },
              {
                title: 'Setting',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/business-objects/setting',
              },
            ],
          },
          {
            title: 'Import Histories',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/import-histories',
          },
          {
            title: 'Export Histories',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/business-objects/export-histories',
          },
          {
            title: 'How to create "Data Source" connected with the" Business object" of CDP',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/data-hub/business-objects/how-to-create-data-source-connected-with-the-business-object-of-cdp',
          },
          {
            title: 'How to create a Collection',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/data-hub/business-objects/how-to-create-a-collection',
          },
          {
            title: 'How to create "Custom Attributes" with Input via UI feature',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/data-hub/business-objects/how-to-create-custom-attributes-with-input-via-ui-feature',
          },
        ],
      },
      {
        title: 'Analytic Models',
        key: generateUniqueId(),
        path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/analytic-models',
      },
      {
        title: 'Data Schema',
        key: generateUniqueId(),
        path: 'https://docs.antsomi.com/cdp-365-user-guide-en/data-hub/data-schema',
      },
    ],
  },
  {
    title: 'Marketing Hub',
    appCode: 'SANDBOX_MARKETING || APP_MARKETING',
    key: generateUniqueId(),
    children: [
      {
        title: 'Customer Journeys',
        key: generateUniqueId(),
        children: [
          {
            title: 'Customer Journeys',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/customer-journeys',
          },
          {
            title: 'Work with Journey',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/customer-journeys/work-with-journey',
          },
          {
            title: 'Blast Campaign',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/customer-journeys/blast-campaign',
          },
          {
            title: 'Metrics',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/customer-journeys/metrics',
          },
          {
            title: 'Label',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/customer-journeys/metrics',
          },
          {
            title: 'Status of Journey',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/customer-journeys/status-of-journey',
          },
          {
            title: 'How to send messages using One Way destination?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-messages-using-one-way-destination',
          },
          {
            title: 'How to explore Journeys?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-explore-journeys',
          },
          {
            title: 'How to test a Journey using Email channel?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-test-a-journey-using-email-channel',
          },
          {
            title: 'How to send marketing email using Mailgun Destination?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-marketing-email-using-mailgun-destination',
          },
          {
            title: 'How to send marketing SMS using One Way SMS Destination?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-marketing-sms-using-one-way-sms-destination',
          },
          {
            title: 'How to create Web Personalization using Media JSON in CDP 365?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-web-personalization-using-media-json-in-cdp-365',
          },
          {
            title: 'How to create an Email Customer Journey?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-an-email-customer-journey',
          },
          {
            title: 'How to create a Web personalization journey?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-a-web-personalization-journey',
          },
          {
            title: 'How to create a "Trello Card" using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-a-trello-card-using-cdp-365',
          },
          {
            title: 'How to display template on website using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-display-template-on-website-using-cdp-365',
          },
          {
            title: 'Initialize customer after submitting form',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/initialize-customer-after-submitting-form',
          },
          {
            title: 'How to create "Customer Journey"?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-customer-journey',
          },
          {
            title: 'How to set up some Inline templates',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-customer-journey',
          },
          {
            title: 'How to check campaign reports?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-set-up-some-inline-templates',
          },
          {
            title: 'How to create "Promotion"/"Coupon" by uploading files?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-promotion-coupon-by-uploading-files',
          },
          {
            title: 'How to create Coupon from Magento or ERP system to CDP 365?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-coupon-from-magento-or-erp-system-to-cdp-365',
          },
          {
            title: 'How to send "SMS Yondu" using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-sms-yondu-using-cdp-365',
          },
          {
            title: 'How to send mail from email upload?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-mail-from-email-upload',
          },
          {
            title: 'How to send "Zalo Notification Service" using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-zalo-notification-service-using-cdp-365',
          },
          {
            title: 'How to send message using "Messenger" in CDP',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-message-using-messenger-in-cdp',
          },
          {
            title: 'How to Send SMS using "Klasik SMS" in CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-sms-using-klasik-sms-in-cdp-365',
          },
          {
            title: 'How to push notification "Firebase Cloud Messaging" using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-push-notification-firebase-cloud-messaging-using-cdp-365',
          },
          {
            title: 'How to Send email using "Amazon SES" in CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-email-using-amazon-ses-in-cdp-365',
          },
          {
            title: 'How to define zone in website for improve web personalize performance',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-define-zone-in-website-for-improve-web-personalize-performance',
          },
          {
            title: 'How to Send "Viber Yondu" using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-viber-yondu-using-cdp-365',
          },
          {
            title: 'How to send "Infobip Viber" using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-infobip-viber-using-cdp-365',
          },
          {
            title: 'How to create a new "Ad Zone"',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-a-new-ad-zone',
          },
          {
            title: 'How to Send SMS using "Telerivet SMS" in CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-sms-using-telerivet-sms-in-cdp-365',
          },
          {
            title: 'How to push notification using "Onesignal (App Push)" in CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-push-notification-using-onesignal-app-push-in-cdp-365',
          },
          {
            title: 'How to push notification using "Antsomi Web Push" in CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-push-notification-using-antsomi-web-push-in-cdp-365',
          },
          {
            title: 'How to Send email using "SendGrid" in CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-email-using-sendgrid-in-cdp-365',
          },
          {
            title: 'How to send email using "Mailjet" in CDP 365?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-email-using-mailjet-in-cdp-365',
          },
          {
            title: 'How to track click metric of OneSignal App Push',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-track-click-metric-of-onesignal-app-push',
          },
          {
            title: 'How to send Ticket from CDP 365 to Antbuddy?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-ticket-from-cdp-365-to-antbuddy',
          },
        ],
      },
      {
        title: 'Destinations',
        key: generateUniqueId(),
        children: [
          {
            title: 'All Destinations',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/destinations/all-destinations',
          },
          {
            title: 'Email',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/destinations/all-destinations/email',
          },
          {
            title: 'Web Personalization',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/destinations/all-destinations/web-personalization',
          },
          {
            title: 'Web Push-Notification',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/destinations/all-destinations/web-push-notification',
          },
          {
            title: 'App Push-Notification',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/destinations/all-destinations/app-push-notification',
          },
          {
            title: 'Conversation',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/destinations/all-destinations/conversation',
          },
          {
            title: 'Webhook',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/destinations/all-destinations/webhook',
          },
          {
            title: 'SMS',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/destinations/all-destinations/sms',
          },
          {
            title: 'Viber',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/destinations/all-destinations/viber',
          },
          {
            title: 'Detail of a Destination',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/destinations/detail-of-a-destination',
          },
          {
            title: 'How to send messages using One Way destination?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-messages-using-one-way-destination',
          },
          {
            title: 'How to send marketing email using Mailgun Destination?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-marketing-email-using-mailgun-destination',
          },
          {
            title: 'How to send marketing SMS using One Way SMS Destination?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-marketing-sms-using-one-way-sms-destination',
          },
          {
            title: 'How to create Web Personalization using Media JSON in CDP 365?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-web-personalization-using-media-json-in-cdp-365',
          },
          {
            title: 'How to create a "Trello Card" using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-a-trello-card-using-cdp-365',
          },
          {
            title: 'How to display template on website using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-display-template-on-website-using-cdp-365',
          },
          {
            title: 'How to create Coupon from Magento or ERP system to CDP 365?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-coupon-from-magento-or-erp-system-to-cdp-365',
          },
          {
            title: 'How to send "SMS Yondu" using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-sms-yondu-using-cdp-365',
          },
          {
            title: 'How to send "Zalo Notification Service" using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-zalo-notification-service-using-cdp-365',
          },
          {
            title: 'How to Send SMS using "Klasik SMS" in CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-sms-using-klasik-sms-in-cdp-365',
          },
          {
            title: 'How to push notification "Firebase Cloud Messaging" using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-push-notification-firebase-cloud-messaging-using-cdp-365',
          },
          {
            title: 'How to Send email using "Amazon SES" in CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-email-using-amazon-ses-in-cdp-365',
          },
          {
            title: 'How to Send "Viber Yondu" using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-viber-yondu-using-cdp-365',
          },
          {
            title: 'How to send "Infobip Viber" using CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-infobip-viber-using-cdp-365',
          },
          {
            title: 'How to Send SMS using "Telerivet SMS" in CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-sms-using-telerivet-sms-in-cdp-365',
          },
          {
            title: 'How to push notification using "Onesignal (App Push)" in CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-push-notification-using-onesignal-app-push-in-cdp-365',
          },
          {
            title: 'How to push notification using "Antsomi Web Push" in CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-push-notification-using-antsomi-web-push-in-cdp-365',
          },
          {
            title: 'How to Send email using "SendGrid" in CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-email-using-sendgrid-in-cdp-365',
          },
          {
            title: 'How to send email using "Mailjet" in CDP 365?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-email-using-mailjet-in-cdp-365',
          },
          {
            title: 'How to track click metric of OneSignal App Push',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-track-click-metric-of-onesignal-app-push',
          },
          {
            title: 'How to send Ticket from CDP 365 to Antbuddy?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-send-ticket-from-cdp-365-to-antbuddy',
          },
        ],
      },
      {
        title: 'Promotion Center',
        key: generateUniqueId(),
        children: [
          {
            title: 'Promotion Center',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/promotion-center',
          },
          {
            title: 'How to create "Promotion"/"Coupon" by uploading files?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-promotion-coupon-by-uploading-files',
          },
          {
            title: 'How to create Coupon from Magento or ERP system to CDP 365?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/marketing-hub/how-to-create-coupon-from-magento-or-erp-system-to-cdp-365',
          },
        ],
      },
      {
        title: 'Media template',
        key: generateUniqueId(),
        children: [
          {
            title: 'Media template',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template',
          },
          {
            title: 'Control Toolbar',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/control-toolbar',
          },
          {
            title: 'Settings',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings',
          },
          {
            title: 'Template Settings',
            key: generateUniqueId(),
            children: [
              {
                title: 'Template Settings',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/template-settings',
              },
              {
                title: 'Basic',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/template-settings/basic',
              },
              {
                title: 'Advanced',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/template-settings/advanced',
              },
            ],
          },
          {
            title: 'Blocks & Settings',
            key: generateUniqueId(),
            children: [
              {
                title: 'Blocks & Settings',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings',
              },
              {
                title: 'Columns',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/columns',
              },
              {
                title: 'Text',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/text',
              },
              {
                title: 'Image',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/image',
              },
              {
                title: 'Button',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/button',
              },
              {
                title: 'Optin fields',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/optin-fields',
              },
              {
                title: 'Yes/No',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/yes-no',
              },
              {
                title: 'Count down',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/count-down',
              },
              {
                title: 'Video',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/video',
              },
              {
                title: 'Coupon Wheel',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/coupon-wheel',
              },
              {
                title: 'Spacer',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/spacer',
              },
              {
                title: 'Divider',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/divider',
              },
              {
                title: 'Icon',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/icon',
              },
              {
                title: 'HTML',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/html',
              },
              {
                title: 'Slide show',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/slide-show',
              },
              {
                title: 'Group',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/group',
              },
              {
                title: 'Rating',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/rating',
              },
              {
                title: 'Table',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/settings/blocks-and-settings/table',
              },
            ],
          },
          {
            title: 'Layers',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/layers',
          },
          {
            title: 'Live Preview',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-template/live-preview',
          },
          {
            title: 'Media JSON',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/media-json',
          },
        ],
      },
      {
        title: 'Form',
        key: generateUniqueId(),
      },
      {
        title: 'Email Template',
        key: generateUniqueId(),
        children: [
          {
            title: 'Email Template',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template',
          },
          {
            title: 'Control Toolbar',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/control-toolbar',
          },
          {
            title: 'Settings',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings',
          },
          {
            title: 'Email Template Settings',
            key: generateUniqueId(),
            children: [
              {
                title: 'Email Template Settings',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/email-template-settings',
              },
              {
                title: 'Basic',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/email-template-settings/basic',
              },
              {
                title: 'Advanced',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/email-template-settings/advanced',
              },
            ],
          },
          {
            title: 'Blocks & Settings',
            key: generateUniqueId(),
            children: [
              {
                title: 'Blocks & Settings',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings',
              },
              {
                title: 'Columns',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings/columns',
              },
              {
                title: 'Text',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings/text',
              },
              {
                title: 'Image',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings/image',
              },
              {
                title: 'Button',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings/button',
              },
              {
                title: 'Count down',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings/count-down',
              },
              {
                title: 'Spacer',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings/spacer',
              },
              {
                title: 'Divider',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings/divider',
              },
              {
                title: 'Icon',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings/icon',
              },
              {
                title: 'HTML',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings/html',
              },
              {
                title: 'Menu',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings/menu',
              },
              {
                title: 'Table',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings/table',
              },
              {
                title: 'Unsubscribe',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings/unsubscribe',
              },
              {
                title: 'Group',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/settings/blocks-and-settings/group',
              },
            ],
          },
          {
            title: 'Layers',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/layers',
          },
          {
            title: 'Live Preview',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/marketing-hub/email-template/live-preview',
          },
        ],
      },
    ],
  },
  {
    title: 'Insights',
    key: generateUniqueId(),
    appCode: 'APP_ANTALYSER',
    children: [
      {
        title: 'Analysis',
        key: generateUniqueId(),
      },
      {
        title: 'Reports',
        key: generateUniqueId(),
        children: [
          {
            title: 'Reports',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports',
          },
          {
            title: 'Quick start guide',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/quick-start-guide',
          },
          {
            title: 'Create reports',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports',
          },
          {
            title: 'About reports',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/about-reports',
          },
          {
            title: 'Build, stylize, and add data to reports',
            key: generateUniqueId(),
            children: [
              {
                title: 'Build, stylize, and add data to reports',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports',
              },
              {
                title: 'Set report date ranges',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/set-report-date-ranges',
              },
              {
                title: 'Add and configure components',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/add-and-configure-components',
              },
              {
                title: 'Chart references',
                key: generateUniqueId(),
                children: [
                  {
                    title: 'Chart references',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/chart-references',
                  },
                  {
                    title: 'Area chart reference',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/chart-references/area-chart-reference',
                  },
                  {
                    title: 'Bar chart reference',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/chart-references/bar-chart-reference',
                  },
                  {
                    title: 'Bullet chart reference',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/chart-references/bullet-chart-reference',
                  },
                  {
                    title: 'Geo chart reference',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/chart-references/geo-chart-reference',
                  },
                  {
                    title: 'Line chart reference',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/chart-references/line-chart-reference',
                  },
                  {
                    title: 'Pie chart reference',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/chart-references/pie-chart-reference',
                  },
                  {
                    title: 'Pivot table reference',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/chart-references/pivot-table-reference',
                  },
                  {
                    title: 'Scatter and bubble chart reference',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/chart-references/scatter-and-bubble-chart-reference',
                  },
                  {
                    title: 'Scorecard reference',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/chart-references/scorecard-reference',
                  },
                  {
                    title: 'Table reference',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/chart-references/table-reference',
                  },
                  {
                    title: 'Time series reference',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/chart-references/time-series-reference',
                  },
                  {
                    title: 'Tree map reference',
                    key: generateUniqueId(),
                    path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/chart-references/tree-map-reference',
                  },
                ],
              },
              {
                title: 'Add reference lines to charts',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/add-reference-lines-to-charts',
              },
              {
                title: 'Add and edit data',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/add-and-edit-data',
              },
              {
                title: 'Add pages and report navigation',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/add-pages-and-report-navigation',
              },
              {
                title: 'Report layout options',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/report-layout-options',
              },
              {
                title: 'Work with color',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/work-with-color',
              },
              {
                title: 'Add text, images, lines, and shapes',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/add-text-images-lines-and-shapes',
              },
              {
                title: 'Arrange and distribute components',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/arrange-and-distribute-components',
              },
              {
                title: 'Use the Insights Report Editor',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/build-stylize-and-add-data-to-reports/use-the-insights-report-editor',
              },
            ],
          },
          {
            title: 'Copy a report',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/copy-a-report',
          },
          {
            title: 'Delete a report',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/delete-a-report',
          },
          {
            title: 'Tutorial: Create a new report',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/create-reports/tutorial-create-a-new-report',
          },
          {
            title: 'Filter your data',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/filter-your-data',
          },
          {
            title: 'About filters',
            key: generateUniqueId(),
            children: [
              {
                title: 'About filters',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/filter-your-data/about-filters',
              },
              {
                title: 'Create, edit, and manage filters',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/filter-your-data/create-edit-and-manage-filters',
              },
              {
                title: 'Configure filter conditions',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/filter-your-data/configure-filter-conditions',
              },
              {
                title: 'Filter examples',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/filter-your-data/filter-examples',
              },
            ],
          },
          {
            title: 'Make reports interactive',
            key: generateUniqueId(),
            children: [
              {
                title: 'Make reports interactive',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/make-reports-interactive',
              },
              {
                title: 'Let your viewers control the date range',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/make-reports-interactive/let-your-viewers-control-the-date-range',
              },
              {
                title: 'About controls',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/make-reports-interactive/about-controls',
              },
              {
                title: 'Use controls across data sources',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/make-reports-interactive/use-controls-across-data-sources',
              },
              {
                title: 'Add chart interaction filters',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/make-reports-interactive/add-chart-interaction-filters',
              },
              {
                title: 'Let viewers drill down into your data',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/make-reports-interactive/let-viewers-drill-down-into-your-data',
              },
            ],
          },
          {
            title: 'Link to a page',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/make-reports-interactive/link-to-a-page',
          },
          {
            title: 'Export data from a chart',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/make-reports-interactive/export-data-from-a-chart',
          },
          {
            title: 'Embed external content in reports',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/make-reports-interactive/embed-external-content-in-reports',
          },
          {
            title: 'Let viewers select the fields in charts',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/make-reports-interactive/let-viewers-select-the-fields-in-charts',
          },
          {
            title: 'Blend multiple data sources in a chart',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/blend-multiple-data-sources-in-a-chart',
          },
          {
            title: 'About data blending',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/blend-multiple-data-sources-in-a-chart/about-data-blending',
          },
          {
            title: 'Blend data in charts',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/blend-multiple-data-sources-in-a-chart/blend-data-in-charts',
          },
          {
            title: 'Filter blended data',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/blend-multiple-data-sources-in-a-chart/filter-blended-data',
          },
          {
            title: 'Change the date range for blended data',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/blend-multiple-data-sources-in-a-chart/change-the-date-range-for-blended-data',
          },
          {
            title: 'Use blending to reaggregate data',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/blend-multiple-data-sources-in-a-chart/use-blending-to-reaggregate-data',
          },
          {
            title: 'Glossary',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/insights/reports/glossary',
          },
          {
            title: 'How to create "Report" with “Journey performance” data source?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/insights/how-to-create-report-with-journey-performance-data-source',
          },
        ],
      },

      {
        title: 'Data Sources',
        key: generateUniqueId(),
        children: [
          {
            title: 'How to create a new "Data sources"?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/insights/how-to-create-a-new-data-sources',
          },
        ],
      },
      {
        title: 'Gallery Template',
        key: generateUniqueId(),
      },
    ],
  },
  {
    title: 'Dataflows',
    key: generateUniqueId(),
    appCode: 'DATAFLOWS',
    children: [
      {
        title: 'Dataflows',
        key: generateUniqueId(),
        children: [
          {
            title: 'Dataflows',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows',
          },
          {
            title: 'Creating a Dataflows',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows',
          },
          {
            title: 'Action node',
            key: generateUniqueId(),
            children: [
              {
                title: 'Action node',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node',
              },
              {
                title: 'Add data',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/add-data',
              },
              {
                title: 'Delay',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/delay',
              },
              {
                title: 'Filter',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/filter',
              },
              {
                title: 'SQL',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/sql',
              },
              {
                title: 'Branch',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/branch',
              },
              {
                title: 'Add column',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/add-column',
              },
              {
                title: 'Aggregate',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/aggregate',
              },
              {
                title: 'Select column',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/select-column',
              },
              {
                title: 'Join',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/join',
              },
              {
                title: 'Bin',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/bin',
              },
              {
                title: 'Merge Columns',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/merge-columns',
              },
              {
                title: 'Split Columns',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/split-columns',
              },
              {
                title: 'Group',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/group',
              },
              {
                title: 'Union Rows',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/union-rows',
              },
              {
                title: 'Save data',
                key: generateUniqueId(),
                path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/action-node/save-data',
              },
            ],
          },
          {
            title: 'Destination channel',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/dataflows/creating-a-dataflows/destination-channel',
          },
          {
            title: 'How to send messages using "Facebook Messenger" in CDP 365',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/dataflows/how-to-send-messages-using-facebook-messenger-in-cdp-365',
          },
          {
            title: 'Set up "Dataflows" to push data to CDP',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/dataflows/set-up-dataflows-to-push-data-to-cdp',
          },
          {
            title: 'Set up "Dataflows" to push data to "Google" and "Facebook" Audiences',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/dataflows/set-up-dataflows-to-push-data-to-google-and-facebook-audiences',
          },
        ],
      },
      {
        title: 'Data Destination',
        key: generateUniqueId(),
        children: [
          {
            title: 'Data Destination',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/data-destinations',
          },
          {
            title: 'Create a Data Destination',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/data-destinations/create-a-data-destination',
          },
          {
            title: 'View/Edit a Data Destination',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/data-destinations/view-edit-a-data-destination',
          },
          {
            title: 'How to create a "Destination Channel" in "Dataflows"?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/dataflows/how-to-create-a-destination-channel-in-dataflows',
          },
        ],
      },
      {
        title: 'Data Source',
        key: generateUniqueId(),
        children: [
          {
            title: 'Data Source',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/data-source',
          },
          {
            title: 'Create a Data Source',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/data-source/create-a-data-source',
          },
          {
            title: 'View/Edit a Data Source',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/data-source/view-edit-a-data-source',
          },
          {
            title: 'Data Source Connectors',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/dataflows/data-source/data-source-connectors',
          },
          {
            title: 'How to create a new Google Analytics data source?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/dataflows/how-to-create-a-new-google-analytics-data-source',
          },
          {
            title: 'How to create Facebook Ads data source?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/dataflows/how-to-create-facebook-ads-data-source',
          },
          {
            title: 'How to create Google Ads data source?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/dataflows/how-to-create-google-ads-data-source',
          },
        ],
      },
    ],
  },
  {
    title: 'Portal Settings',
    appCode: 'PORTAL_SETTING',
    key: generateUniqueId(),
    children: [
      {
        title: 'Data Encryption',
        key: generateUniqueId(),
        path: 'https://docs.antsomi.com/cdp-365-user-guide-en/portal-settings/data-encryption',
      },
      {
        title: 'General Settings',
        key: generateUniqueId(),
        path: 'https://docs.antsomi.com/cdp-365-user-guide-en/portal-settings/general-setting',
      },
      {
        title: 'Roles',
        key: generateUniqueId(),
        path: 'https://docs.antsomi.com/cdp-365-user-guide-en/portal-settings/general-setting/roles',
      },
      {
        title: 'Accounts',
        key: generateUniqueId(),
        children: [
          {
            title: 'Accounts',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/portal-settings/accounts',
          },
          {
            title: 'How to set up two-step authentication?',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/use-cases/portal-settings/how-to-set-up-two-step-authentication',
          },
        ],
      },
      {
        title: 'Menus',
        key: generateUniqueId(),
        path: 'https://docs.antsomi.com/cdp-365-user-guide-en/portal-settings/menus',
      },
      {
        title: 'Providers',
        key: generateUniqueId(),
      },
      {
        title: 'Account Sharing',
        key: generateUniqueId(),
        path: 'https://docs.antsomi.com/cdp-365-user-guide-en/portal-settings/account-sharing',
      },
    ],
  },
  {
    title: 'Ticket Management',
    key: generateUniqueId(),
    appCode: 'TICKET_MANAGEMENT',
    children: [
      {
        title: 'Ticket',
        key: generateUniqueId(),
        children: [
          {
            title: 'Tickets',
            key: generateUniqueId(),
            path: 'https://docs.antsomi.com/cdp-365-user-guide-en/ticket-management/tickets',
          },
        ],
      },
    ],
  },
];
