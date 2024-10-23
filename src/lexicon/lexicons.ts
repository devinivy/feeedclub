/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { LexiconDoc, Lexicons } from '@atproto/lexicon'

export const schemaDict = {
  ComAtprotoAdminDefs: {
    lexicon: 1,
    id: 'com.atproto.admin.defs',
    defs: {
      statusAttr: {
        type: 'object',
        required: ['applied'],
        properties: {
          applied: {
            type: 'boolean',
          },
          ref: {
            type: 'string',
          },
        },
      },
      accountView: {
        type: 'object',
        required: ['did', 'handle', 'indexedAt'],
        properties: {
          did: {
            type: 'string',
            format: 'did',
          },
          handle: {
            type: 'string',
            format: 'handle',
          },
          email: {
            type: 'string',
          },
          relatedRecords: {
            type: 'array',
            items: {
              type: 'unknown',
            },
          },
          indexedAt: {
            type: 'string',
            format: 'datetime',
          },
          invitedBy: {
            type: 'ref',
            ref: 'lex:com.atproto.server.defs#inviteCode',
          },
          invites: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.server.defs#inviteCode',
            },
          },
          invitesDisabled: {
            type: 'boolean',
          },
          emailConfirmedAt: {
            type: 'string',
            format: 'datetime',
          },
          inviteNote: {
            type: 'string',
          },
          deactivatedAt: {
            type: 'string',
            format: 'datetime',
          },
        },
      },
      repoRef: {
        type: 'object',
        required: ['did'],
        properties: {
          did: {
            type: 'string',
            format: 'did',
          },
        },
      },
      repoBlobRef: {
        type: 'object',
        required: ['did', 'cid'],
        properties: {
          did: {
            type: 'string',
            format: 'did',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          recordUri: {
            type: 'string',
            format: 'at-uri',
          },
        },
      },
    },
  },
  ComAtprotoAdminDeleteAccount: {
    lexicon: 1,
    id: 'com.atproto.admin.deleteAccount',
    defs: {
      main: {
        type: 'procedure',
        description: 'Delete a user account as an administrator.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['did'],
            properties: {
              did: {
                type: 'string',
                format: 'did',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoAdminDisableAccountInvites: {
    lexicon: 1,
    id: 'com.atproto.admin.disableAccountInvites',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Disable an account from receiving new invite codes, but does not invalidate existing codes.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['account'],
            properties: {
              account: {
                type: 'string',
                format: 'did',
              },
              note: {
                type: 'string',
                description: 'Optional reason for disabled invites.',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoAdminDisableInviteCodes: {
    lexicon: 1,
    id: 'com.atproto.admin.disableInviteCodes',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Disable some set of codes and/or all codes associated with a set of users.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              codes: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              accounts: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoAdminEnableAccountInvites: {
    lexicon: 1,
    id: 'com.atproto.admin.enableAccountInvites',
    defs: {
      main: {
        type: 'procedure',
        description: "Re-enable an account's ability to receive invite codes.",
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['account'],
            properties: {
              account: {
                type: 'string',
                format: 'did',
              },
              note: {
                type: 'string',
                description: 'Optional reason for enabled invites.',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoAdminGetAccountInfo: {
    lexicon: 1,
    id: 'com.atproto.admin.getAccountInfo',
    defs: {
      main: {
        type: 'query',
        description: 'Get details about an account.',
        parameters: {
          type: 'params',
          required: ['did'],
          properties: {
            did: {
              type: 'string',
              format: 'did',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:com.atproto.admin.defs#accountView',
          },
        },
      },
    },
  },
  ComAtprotoAdminGetAccountInfos: {
    lexicon: 1,
    id: 'com.atproto.admin.getAccountInfos',
    defs: {
      main: {
        type: 'query',
        description: 'Get details about some accounts.',
        parameters: {
          type: 'params',
          required: ['dids'],
          properties: {
            dids: {
              type: 'array',
              items: {
                type: 'string',
                format: 'did',
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['infos'],
            properties: {
              infos: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:com.atproto.admin.defs#accountView',
                },
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoAdminGetInviteCodes: {
    lexicon: 1,
    id: 'com.atproto.admin.getInviteCodes',
    defs: {
      main: {
        type: 'query',
        description: 'Get an admin view of invite codes.',
        parameters: {
          type: 'params',
          properties: {
            sort: {
              type: 'string',
              knownValues: ['recent', 'usage'],
              default: 'recent',
            },
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 500,
              default: 100,
            },
            cursor: {
              type: 'string',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['codes'],
            properties: {
              cursor: {
                type: 'string',
              },
              codes: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:com.atproto.server.defs#inviteCode',
                },
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoAdminGetSubjectStatus: {
    lexicon: 1,
    id: 'com.atproto.admin.getSubjectStatus',
    defs: {
      main: {
        type: 'query',
        description:
          'Get the service-specific admin status of a subject (account, record, or blob).',
        parameters: {
          type: 'params',
          properties: {
            did: {
              type: 'string',
              format: 'did',
            },
            uri: {
              type: 'string',
              format: 'at-uri',
            },
            blob: {
              type: 'string',
              format: 'cid',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['subject'],
            properties: {
              subject: {
                type: 'union',
                refs: [
                  'lex:com.atproto.admin.defs#repoRef',
                  'lex:com.atproto.repo.strongRef',
                  'lex:com.atproto.admin.defs#repoBlobRef',
                ],
              },
              takedown: {
                type: 'ref',
                ref: 'lex:com.atproto.admin.defs#statusAttr',
              },
              deactivated: {
                type: 'ref',
                ref: 'lex:com.atproto.admin.defs#statusAttr',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoAdminSearchAccounts: {
    lexicon: 1,
    id: 'com.atproto.admin.searchAccounts',
    defs: {
      main: {
        type: 'query',
        description: 'Get list of accounts that matches your search query.',
        parameters: {
          type: 'params',
          properties: {
            email: {
              type: 'string',
            },
            cursor: {
              type: 'string',
            },
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 50,
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['accounts'],
            properties: {
              cursor: {
                type: 'string',
              },
              accounts: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:com.atproto.admin.defs#accountView',
                },
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoAdminSendEmail: {
    lexicon: 1,
    id: 'com.atproto.admin.sendEmail',
    defs: {
      main: {
        type: 'procedure',
        description: "Send email to a user's account email address.",
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['recipientDid', 'content', 'senderDid'],
            properties: {
              recipientDid: {
                type: 'string',
                format: 'did',
              },
              content: {
                type: 'string',
              },
              subject: {
                type: 'string',
              },
              senderDid: {
                type: 'string',
                format: 'did',
              },
              comment: {
                type: 'string',
                description:
                  "Additional comment by the sender that won't be used in the email itself but helpful to provide more context for moderators/reviewers",
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['sent'],
            properties: {
              sent: {
                type: 'boolean',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoAdminUpdateAccountEmail: {
    lexicon: 1,
    id: 'com.atproto.admin.updateAccountEmail',
    defs: {
      main: {
        type: 'procedure',
        description: "Administrative action to update an account's email.",
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['account', 'email'],
            properties: {
              account: {
                type: 'string',
                format: 'at-identifier',
                description: 'The handle or DID of the repo.',
              },
              email: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoAdminUpdateAccountHandle: {
    lexicon: 1,
    id: 'com.atproto.admin.updateAccountHandle',
    defs: {
      main: {
        type: 'procedure',
        description: "Administrative action to update an account's handle.",
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['did', 'handle'],
            properties: {
              did: {
                type: 'string',
                format: 'did',
              },
              handle: {
                type: 'string',
                format: 'handle',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoAdminUpdateAccountPassword: {
    lexicon: 1,
    id: 'com.atproto.admin.updateAccountPassword',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Update the password for a user account as an administrator.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['did', 'password'],
            properties: {
              did: {
                type: 'string',
                format: 'did',
              },
              password: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoAdminUpdateSubjectStatus: {
    lexicon: 1,
    id: 'com.atproto.admin.updateSubjectStatus',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Update the service-specific admin status of a subject (account, record, or blob).',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['subject'],
            properties: {
              subject: {
                type: 'union',
                refs: [
                  'lex:com.atproto.admin.defs#repoRef',
                  'lex:com.atproto.repo.strongRef',
                  'lex:com.atproto.admin.defs#repoBlobRef',
                ],
              },
              takedown: {
                type: 'ref',
                ref: 'lex:com.atproto.admin.defs#statusAttr',
              },
              deactivated: {
                type: 'ref',
                ref: 'lex:com.atproto.admin.defs#statusAttr',
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['subject'],
            properties: {
              subject: {
                type: 'union',
                refs: [
                  'lex:com.atproto.admin.defs#repoRef',
                  'lex:com.atproto.repo.strongRef',
                  'lex:com.atproto.admin.defs#repoBlobRef',
                ],
              },
              takedown: {
                type: 'ref',
                ref: 'lex:com.atproto.admin.defs#statusAttr',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoIdentityGetRecommendedDidCredentials: {
    lexicon: 1,
    id: 'com.atproto.identity.getRecommendedDidCredentials',
    defs: {
      main: {
        type: 'query',
        description:
          'Describe the credentials that should be included in the DID doc of an account that is migrating to this service.',
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              rotationKeys: {
                description:
                  'Recommended rotation keys for PLC dids. Should be undefined (or ignored) for did:webs.',
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              alsoKnownAs: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              verificationMethods: {
                type: 'unknown',
              },
              services: {
                type: 'unknown',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoIdentityRequestPlcOperationSignature: {
    lexicon: 1,
    id: 'com.atproto.identity.requestPlcOperationSignature',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Request an email with a code to in order to request a signed PLC operation. Requires Auth.',
      },
    },
  },
  ComAtprotoIdentityResolveHandle: {
    lexicon: 1,
    id: 'com.atproto.identity.resolveHandle',
    defs: {
      main: {
        type: 'query',
        description: 'Resolves a handle (domain name) to a DID.',
        parameters: {
          type: 'params',
          required: ['handle'],
          properties: {
            handle: {
              type: 'string',
              format: 'handle',
              description: 'The handle to resolve.',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['did'],
            properties: {
              did: {
                type: 'string',
                format: 'did',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoIdentitySignPlcOperation: {
    lexicon: 1,
    id: 'com.atproto.identity.signPlcOperation',
    defs: {
      main: {
        type: 'procedure',
        description:
          "Signs a PLC operation to update some value(s) in the requesting DID's document.",
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              token: {
                description:
                  'A token received through com.atproto.identity.requestPlcOperationSignature',
                type: 'string',
              },
              rotationKeys: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              alsoKnownAs: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              verificationMethods: {
                type: 'unknown',
              },
              services: {
                type: 'unknown',
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['operation'],
            properties: {
              operation: {
                type: 'unknown',
                description: 'A signed DID PLC operation.',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoIdentitySubmitPlcOperation: {
    lexicon: 1,
    id: 'com.atproto.identity.submitPlcOperation',
    defs: {
      main: {
        type: 'procedure',
        description:
          "Validates a PLC operation to ensure that it doesn't violate a service's constraints or get the identity into a bad state, then submits it to the PLC registry",
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['operation'],
            properties: {
              operation: {
                type: 'unknown',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoIdentityUpdateHandle: {
    lexicon: 1,
    id: 'com.atproto.identity.updateHandle',
    defs: {
      main: {
        type: 'procedure',
        description:
          "Updates the current account's handle. Verifies handle validity, and updates did:plc document if necessary. Implemented by PDS, and requires auth.",
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['handle'],
            properties: {
              handle: {
                type: 'string',
                format: 'handle',
                description: 'The new handle.',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoLabelDefs: {
    lexicon: 1,
    id: 'com.atproto.label.defs',
    defs: {
      label: {
        type: 'object',
        description:
          'Metadata tag on an atproto resource (eg, repo or record).',
        required: ['src', 'uri', 'val', 'cts'],
        properties: {
          ver: {
            type: 'integer',
            description: 'The AT Protocol version of the label object.',
          },
          src: {
            type: 'string',
            format: 'did',
            description: 'DID of the actor who created this label.',
          },
          uri: {
            type: 'string',
            format: 'uri',
            description:
              'AT URI of the record, repository (account), or other resource that this label applies to.',
          },
          cid: {
            type: 'string',
            format: 'cid',
            description:
              "Optionally, CID specifying the specific version of 'uri' resource this label applies to.",
          },
          val: {
            type: 'string',
            maxLength: 128,
            description:
              'The short string name of the value or type of this label.',
          },
          neg: {
            type: 'boolean',
            description:
              'If true, this is a negation label, overwriting a previous label.',
          },
          cts: {
            type: 'string',
            format: 'datetime',
            description: 'Timestamp when this label was created.',
          },
          exp: {
            type: 'string',
            format: 'datetime',
            description:
              'Timestamp at which this label expires (no longer applies).',
          },
          sig: {
            type: 'bytes',
            description: 'Signature of dag-cbor encoded label.',
          },
        },
      },
      selfLabels: {
        type: 'object',
        description:
          'Metadata tags on an atproto record, published by the author within the record.',
        required: ['values'],
        properties: {
          values: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#selfLabel',
            },
            maxLength: 10,
          },
        },
      },
      selfLabel: {
        type: 'object',
        description:
          'Metadata tag on an atproto record, published by the author within the record. Note that schemas should use #selfLabels, not #selfLabel.',
        required: ['val'],
        properties: {
          val: {
            type: 'string',
            maxLength: 128,
            description:
              'The short string name of the value or type of this label.',
          },
        },
      },
      labelValueDefinition: {
        type: 'object',
        description:
          'Declares a label value and its expected interpretations and behaviors.',
        required: ['identifier', 'severity', 'blurs', 'locales'],
        properties: {
          identifier: {
            type: 'string',
            description:
              "The value of the label being defined. Must only include lowercase ascii and the '-' character ([a-z-]+).",
            maxLength: 100,
            maxGraphemes: 100,
          },
          severity: {
            type: 'string',
            description:
              "How should a client visually convey this label? 'inform' means neutral and informational; 'alert' means negative and warning; 'none' means show nothing.",
            knownValues: ['inform', 'alert', 'none'],
          },
          blurs: {
            type: 'string',
            description:
              "What should this label hide in the UI, if applied? 'content' hides all of the target; 'media' hides the images/video/audio; 'none' hides nothing.",
            knownValues: ['content', 'media', 'none'],
          },
          defaultSetting: {
            type: 'string',
            description: 'The default setting for this label.',
            knownValues: ['ignore', 'warn', 'hide'],
            default: 'warn',
          },
          adultOnly: {
            type: 'boolean',
            description:
              'Does the user need to have adult content enabled in order to configure this label?',
          },
          locales: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#labelValueDefinitionStrings',
            },
          },
        },
      },
      labelValueDefinitionStrings: {
        type: 'object',
        description:
          'Strings which describe the label in the UI, localized into a specific language.',
        required: ['lang', 'name', 'description'],
        properties: {
          lang: {
            type: 'string',
            description:
              'The code of the language these strings are written in.',
            format: 'language',
          },
          name: {
            type: 'string',
            description: 'A short human-readable name for the label.',
            maxGraphemes: 64,
            maxLength: 640,
          },
          description: {
            type: 'string',
            description:
              'A longer description of what the label means and why it might be applied.',
            maxGraphemes: 10000,
            maxLength: 100000,
          },
        },
      },
      labelValue: {
        type: 'string',
        knownValues: [
          '!hide',
          '!no-promote',
          '!warn',
          '!no-unauthenticated',
          'dmca-violation',
          'doxxing',
          'porn',
          'sexual',
          'nudity',
          'nsfl',
          'gore',
        ],
      },
    },
  },
  ComAtprotoLabelQueryLabels: {
    lexicon: 1,
    id: 'com.atproto.label.queryLabels',
    defs: {
      main: {
        type: 'query',
        description:
          'Find labels relevant to the provided AT-URI patterns. Public endpoint for moderation services, though may return different or additional results with auth.',
        parameters: {
          type: 'params',
          required: ['uriPatterns'],
          properties: {
            uriPatterns: {
              type: 'array',
              items: {
                type: 'string',
              },
              description:
                "List of AT URI patterns to match (boolean 'OR'). Each may be a prefix (ending with '*'; will match inclusive of the string leading to '*'), or a full URI.",
            },
            sources: {
              type: 'array',
              items: {
                type: 'string',
                format: 'did',
              },
              description:
                'Optional list of label sources (DIDs) to filter on.',
            },
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 250,
              default: 50,
            },
            cursor: {
              type: 'string',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['labels'],
            properties: {
              cursor: {
                type: 'string',
              },
              labels: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:com.atproto.label.defs#label',
                },
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoLabelSubscribeLabels: {
    lexicon: 1,
    id: 'com.atproto.label.subscribeLabels',
    defs: {
      main: {
        type: 'subscription',
        description:
          'Subscribe to stream of labels (and negations). Public endpoint implemented by mod services. Uses same sequencing scheme as repo event stream.',
        parameters: {
          type: 'params',
          properties: {
            cursor: {
              type: 'integer',
              description: 'The last known event seq number to backfill from.',
            },
          },
        },
        message: {
          schema: {
            type: 'union',
            refs: [
              'lex:com.atproto.label.subscribeLabels#labels',
              'lex:com.atproto.label.subscribeLabels#info',
            ],
          },
        },
        errors: [
          {
            name: 'FutureCursor',
          },
        ],
      },
      labels: {
        type: 'object',
        required: ['seq', 'labels'],
        properties: {
          seq: {
            type: 'integer',
          },
          labels: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#label',
            },
          },
        },
      },
      info: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {
            type: 'string',
            knownValues: ['OutdatedCursor'],
          },
          message: {
            type: 'string',
          },
        },
      },
    },
  },
  ComAtprotoModerationCreateReport: {
    lexicon: 1,
    id: 'com.atproto.moderation.createReport',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Submit a moderation report regarding an atproto account or record. Implemented by moderation services (with PDS proxying), and requires auth.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['reasonType', 'subject'],
            properties: {
              reasonType: {
                type: 'ref',
                description:
                  'Indicates the broad category of violation the report is for.',
                ref: 'lex:com.atproto.moderation.defs#reasonType',
              },
              reason: {
                type: 'string',
                maxGraphemes: 2000,
                maxLength: 20000,
                description:
                  'Additional context about the content and violation.',
              },
              subject: {
                type: 'union',
                refs: [
                  'lex:com.atproto.admin.defs#repoRef',
                  'lex:com.atproto.repo.strongRef',
                ],
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: [
              'id',
              'reasonType',
              'subject',
              'reportedBy',
              'createdAt',
            ],
            properties: {
              id: {
                type: 'integer',
              },
              reasonType: {
                type: 'ref',
                ref: 'lex:com.atproto.moderation.defs#reasonType',
              },
              reason: {
                type: 'string',
                maxGraphemes: 2000,
                maxLength: 20000,
              },
              subject: {
                type: 'union',
                refs: [
                  'lex:com.atproto.admin.defs#repoRef',
                  'lex:com.atproto.repo.strongRef',
                ],
              },
              reportedBy: {
                type: 'string',
                format: 'did',
              },
              createdAt: {
                type: 'string',
                format: 'datetime',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoModerationDefs: {
    lexicon: 1,
    id: 'com.atproto.moderation.defs',
    defs: {
      reasonType: {
        type: 'string',
        knownValues: [
          'com.atproto.moderation.defs#reasonSpam',
          'com.atproto.moderation.defs#reasonViolation',
          'com.atproto.moderation.defs#reasonMisleading',
          'com.atproto.moderation.defs#reasonSexual',
          'com.atproto.moderation.defs#reasonRude',
          'com.atproto.moderation.defs#reasonOther',
          'com.atproto.moderation.defs#reasonAppeal',
        ],
      },
      reasonSpam: {
        type: 'token',
        description: 'Spam: frequent unwanted promotion, replies, mentions',
      },
      reasonViolation: {
        type: 'token',
        description: 'Direct violation of server rules, laws, terms of service',
      },
      reasonMisleading: {
        type: 'token',
        description: 'Misleading identity, affiliation, or content',
      },
      reasonSexual: {
        type: 'token',
        description: 'Unwanted or mislabeled sexual content',
      },
      reasonRude: {
        type: 'token',
        description:
          'Rude, harassing, explicit, or otherwise unwelcoming behavior',
      },
      reasonOther: {
        type: 'token',
        description: 'Other: reports not falling under another report category',
      },
      reasonAppeal: {
        type: 'token',
        description: 'Appeal: appeal a previously taken moderation action',
      },
    },
  },
  ComAtprotoRepoApplyWrites: {
    lexicon: 1,
    id: 'com.atproto.repo.applyWrites',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Apply a batch transaction of repository creates, updates, and deletes. Requires auth, implemented by PDS.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['repo', 'writes'],
            properties: {
              repo: {
                type: 'string',
                format: 'at-identifier',
                description:
                  'The handle or DID of the repo (aka, current account).',
              },
              validate: {
                type: 'boolean',
                description:
                  "Can be set to 'false' to skip Lexicon schema validation of record data across all operations, 'true' to require it, or leave unset to validate only for known Lexicons.",
              },
              writes: {
                type: 'array',
                items: {
                  type: 'union',
                  refs: [
                    'lex:com.atproto.repo.applyWrites#create',
                    'lex:com.atproto.repo.applyWrites#update',
                    'lex:com.atproto.repo.applyWrites#delete',
                  ],
                  closed: true,
                },
              },
              swapCommit: {
                type: 'string',
                description:
                  'If provided, the entire operation will fail if the current repo commit CID does not match this value. Used to prevent conflicting repo mutations.',
                format: 'cid',
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: [],
            properties: {
              commit: {
                type: 'ref',
                ref: 'lex:com.atproto.repo.defs#commitMeta',
              },
              results: {
                type: 'array',
                items: {
                  type: 'union',
                  refs: [
                    'lex:com.atproto.repo.applyWrites#createResult',
                    'lex:com.atproto.repo.applyWrites#updateResult',
                    'lex:com.atproto.repo.applyWrites#deleteResult',
                  ],
                  closed: true,
                },
              },
            },
          },
        },
        errors: [
          {
            name: 'InvalidSwap',
            description:
              "Indicates that the 'swapCommit' parameter did not match current commit.",
          },
        ],
      },
      create: {
        type: 'object',
        description: 'Operation which creates a new record.',
        required: ['collection', 'value'],
        properties: {
          collection: {
            type: 'string',
            format: 'nsid',
          },
          rkey: {
            type: 'string',
            maxLength: 15,
          },
          value: {
            type: 'unknown',
          },
        },
      },
      update: {
        type: 'object',
        description: 'Operation which updates an existing record.',
        required: ['collection', 'rkey', 'value'],
        properties: {
          collection: {
            type: 'string',
            format: 'nsid',
          },
          rkey: {
            type: 'string',
          },
          value: {
            type: 'unknown',
          },
        },
      },
      delete: {
        type: 'object',
        description: 'Operation which deletes an existing record.',
        required: ['collection', 'rkey'],
        properties: {
          collection: {
            type: 'string',
            format: 'nsid',
          },
          rkey: {
            type: 'string',
          },
        },
      },
      createResult: {
        type: 'object',
        required: ['uri', 'cid'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          validationStatus: {
            type: 'string',
            knownValues: ['valid', 'unknown'],
          },
        },
      },
      updateResult: {
        type: 'object',
        required: ['uri', 'cid'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          validationStatus: {
            type: 'string',
            knownValues: ['valid', 'unknown'],
          },
        },
      },
      deleteResult: {
        type: 'object',
        required: [],
        properties: {},
      },
    },
  },
  ComAtprotoRepoCreateRecord: {
    lexicon: 1,
    id: 'com.atproto.repo.createRecord',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Create a single new repository record. Requires auth, implemented by PDS.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['repo', 'collection', 'record'],
            properties: {
              repo: {
                type: 'string',
                format: 'at-identifier',
                description:
                  'The handle or DID of the repo (aka, current account).',
              },
              collection: {
                type: 'string',
                format: 'nsid',
                description: 'The NSID of the record collection.',
              },
              rkey: {
                type: 'string',
                description: 'The Record Key.',
                maxLength: 15,
              },
              validate: {
                type: 'boolean',
                description:
                  "Can be set to 'false' to skip Lexicon schema validation of record data, 'true' to require it, or leave unset to validate only for known Lexicons.",
              },
              record: {
                type: 'unknown',
                description: 'The record itself. Must contain a $type field.',
              },
              swapCommit: {
                type: 'string',
                format: 'cid',
                description:
                  'Compare and swap with the previous commit by CID.',
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['uri', 'cid'],
            properties: {
              uri: {
                type: 'string',
                format: 'at-uri',
              },
              cid: {
                type: 'string',
                format: 'cid',
              },
              commit: {
                type: 'ref',
                ref: 'lex:com.atproto.repo.defs#commitMeta',
              },
              validationStatus: {
                type: 'string',
                knownValues: ['valid', 'unknown'],
              },
            },
          },
        },
        errors: [
          {
            name: 'InvalidSwap',
            description:
              "Indicates that 'swapCommit' didn't match current repo commit.",
          },
        ],
      },
    },
  },
  ComAtprotoRepoDefs: {
    lexicon: 1,
    id: 'com.atproto.repo.defs',
    defs: {
      commitMeta: {
        type: 'object',
        required: ['cid', 'rev'],
        properties: {
          cid: {
            type: 'string',
            format: 'cid',
          },
          rev: {
            type: 'string',
          },
        },
      },
    },
  },
  ComAtprotoRepoDeleteRecord: {
    lexicon: 1,
    id: 'com.atproto.repo.deleteRecord',
    defs: {
      main: {
        type: 'procedure',
        description:
          "Delete a repository record, or ensure it doesn't exist. Requires auth, implemented by PDS.",
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['repo', 'collection', 'rkey'],
            properties: {
              repo: {
                type: 'string',
                format: 'at-identifier',
                description:
                  'The handle or DID of the repo (aka, current account).',
              },
              collection: {
                type: 'string',
                format: 'nsid',
                description: 'The NSID of the record collection.',
              },
              rkey: {
                type: 'string',
                description: 'The Record Key.',
              },
              swapRecord: {
                type: 'string',
                format: 'cid',
                description:
                  'Compare and swap with the previous record by CID.',
              },
              swapCommit: {
                type: 'string',
                format: 'cid',
                description:
                  'Compare and swap with the previous commit by CID.',
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              commit: {
                type: 'ref',
                ref: 'lex:com.atproto.repo.defs#commitMeta',
              },
            },
          },
        },
        errors: [
          {
            name: 'InvalidSwap',
          },
        ],
      },
    },
  },
  ComAtprotoRepoDescribeRepo: {
    lexicon: 1,
    id: 'com.atproto.repo.describeRepo',
    defs: {
      main: {
        type: 'query',
        description:
          'Get information about an account and repository, including the list of collections. Does not require auth.',
        parameters: {
          type: 'params',
          required: ['repo'],
          properties: {
            repo: {
              type: 'string',
              format: 'at-identifier',
              description: 'The handle or DID of the repo.',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: [
              'handle',
              'did',
              'didDoc',
              'collections',
              'handleIsCorrect',
            ],
            properties: {
              handle: {
                type: 'string',
                format: 'handle',
              },
              did: {
                type: 'string',
                format: 'did',
              },
              didDoc: {
                type: 'unknown',
                description: 'The complete DID document for this account.',
              },
              collections: {
                type: 'array',
                description:
                  'List of all the collections (NSIDs) for which this repo contains at least one record.',
                items: {
                  type: 'string',
                  format: 'nsid',
                },
              },
              handleIsCorrect: {
                type: 'boolean',
                description:
                  'Indicates if handle is currently valid (resolves bi-directionally)',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoRepoGetRecord: {
    lexicon: 1,
    id: 'com.atproto.repo.getRecord',
    defs: {
      main: {
        type: 'query',
        description:
          'Get a single record from a repository. Does not require auth.',
        parameters: {
          type: 'params',
          required: ['repo', 'collection', 'rkey'],
          properties: {
            repo: {
              type: 'string',
              format: 'at-identifier',
              description: 'The handle or DID of the repo.',
            },
            collection: {
              type: 'string',
              format: 'nsid',
              description: 'The NSID of the record collection.',
            },
            rkey: {
              type: 'string',
              description: 'The Record Key.',
            },
            cid: {
              type: 'string',
              format: 'cid',
              description:
                'The CID of the version of the record. If not specified, then return the most recent version.',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['uri', 'value'],
            properties: {
              uri: {
                type: 'string',
                format: 'at-uri',
              },
              cid: {
                type: 'string',
                format: 'cid',
              },
              value: {
                type: 'unknown',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoRepoImportRepo: {
    lexicon: 1,
    id: 'com.atproto.repo.importRepo',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Import a repo in the form of a CAR file. Requires Content-Length HTTP header to be set.',
        input: {
          encoding: 'application/vnd.ipld.car',
        },
      },
    },
  },
  ComAtprotoRepoListMissingBlobs: {
    lexicon: 1,
    id: 'com.atproto.repo.listMissingBlobs',
    defs: {
      main: {
        type: 'query',
        description:
          'Returns a list of missing blobs for the requesting account. Intended to be used in the account migration flow.',
        parameters: {
          type: 'params',
          properties: {
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 1000,
              default: 500,
            },
            cursor: {
              type: 'string',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['blobs'],
            properties: {
              cursor: {
                type: 'string',
              },
              blobs: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:com.atproto.repo.listMissingBlobs#recordBlob',
                },
              },
            },
          },
        },
      },
      recordBlob: {
        type: 'object',
        required: ['cid', 'recordUri'],
        properties: {
          cid: {
            type: 'string',
            format: 'cid',
          },
          recordUri: {
            type: 'string',
            format: 'at-uri',
          },
        },
      },
    },
  },
  ComAtprotoRepoListRecords: {
    lexicon: 1,
    id: 'com.atproto.repo.listRecords',
    defs: {
      main: {
        type: 'query',
        description:
          'List a range of records in a repository, matching a specific collection. Does not require auth.',
        parameters: {
          type: 'params',
          required: ['repo', 'collection'],
          properties: {
            repo: {
              type: 'string',
              format: 'at-identifier',
              description: 'The handle or DID of the repo.',
            },
            collection: {
              type: 'string',
              format: 'nsid',
              description: 'The NSID of the record type.',
            },
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 50,
              description: 'The number of records to return.',
            },
            cursor: {
              type: 'string',
            },
            rkeyStart: {
              type: 'string',
              description:
                'DEPRECATED: The lowest sort-ordered rkey to start from (exclusive)',
            },
            rkeyEnd: {
              type: 'string',
              description:
                'DEPRECATED: The highest sort-ordered rkey to stop at (exclusive)',
            },
            reverse: {
              type: 'boolean',
              description: 'Flag to reverse the order of the returned records.',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['records'],
            properties: {
              cursor: {
                type: 'string',
              },
              records: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:com.atproto.repo.listRecords#record',
                },
              },
            },
          },
        },
      },
      record: {
        type: 'object',
        required: ['uri', 'cid', 'value'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          value: {
            type: 'unknown',
          },
        },
      },
    },
  },
  ComAtprotoRepoPutRecord: {
    lexicon: 1,
    id: 'com.atproto.repo.putRecord',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Write a repository record, creating or updating it as needed. Requires auth, implemented by PDS.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['repo', 'collection', 'rkey', 'record'],
            nullable: ['swapRecord'],
            properties: {
              repo: {
                type: 'string',
                format: 'at-identifier',
                description:
                  'The handle or DID of the repo (aka, current account).',
              },
              collection: {
                type: 'string',
                format: 'nsid',
                description: 'The NSID of the record collection.',
              },
              rkey: {
                type: 'string',
                description: 'The Record Key.',
                maxLength: 15,
              },
              validate: {
                type: 'boolean',
                description:
                  "Can be set to 'false' to skip Lexicon schema validation of record data, 'true' to require it, or leave unset to validate only for known Lexicons.",
              },
              record: {
                type: 'unknown',
                description: 'The record to write.',
              },
              swapRecord: {
                type: 'string',
                format: 'cid',
                description:
                  'Compare and swap with the previous record by CID. WARNING: nullable and optional field; may cause problems with golang implementation',
              },
              swapCommit: {
                type: 'string',
                format: 'cid',
                description:
                  'Compare and swap with the previous commit by CID.',
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['uri', 'cid'],
            properties: {
              uri: {
                type: 'string',
                format: 'at-uri',
              },
              cid: {
                type: 'string',
                format: 'cid',
              },
              commit: {
                type: 'ref',
                ref: 'lex:com.atproto.repo.defs#commitMeta',
              },
              validationStatus: {
                type: 'string',
                knownValues: ['valid', 'unknown'],
              },
            },
          },
        },
        errors: [
          {
            name: 'InvalidSwap',
          },
        ],
      },
    },
  },
  ComAtprotoRepoStrongRef: {
    lexicon: 1,
    id: 'com.atproto.repo.strongRef',
    description: 'A URI with a content-hash fingerprint.',
    defs: {
      main: {
        type: 'object',
        required: ['uri', 'cid'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
        },
      },
    },
  },
  ComAtprotoRepoUploadBlob: {
    lexicon: 1,
    id: 'com.atproto.repo.uploadBlob',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Upload a new blob, to be referenced from a repository record. The blob will be deleted if it is not referenced within a time window (eg, minutes). Blob restrictions (mimetype, size, etc) are enforced when the reference is created. Requires auth, implemented by PDS.',
        input: {
          encoding: '*/*',
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['blob'],
            properties: {
              blob: {
                type: 'blob',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoServerActivateAccount: {
    lexicon: 1,
    id: 'com.atproto.server.activateAccount',
    defs: {
      main: {
        type: 'procedure',
        description:
          "Activates a currently deactivated account. Used to finalize account migration after the account's repo is imported and identity is setup.",
      },
    },
  },
  ComAtprotoServerCheckAccountStatus: {
    lexicon: 1,
    id: 'com.atproto.server.checkAccountStatus',
    defs: {
      main: {
        type: 'query',
        description:
          'Returns the status of an account, especially as pertaining to import or recovery. Can be called many times over the course of an account migration. Requires auth and can only be called pertaining to oneself.',
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: [
              'activated',
              'validDid',
              'repoCommit',
              'repoRev',
              'repoBlocks',
              'indexedRecords',
              'privateStateValues',
              'expectedBlobs',
              'importedBlobs',
            ],
            properties: {
              activated: {
                type: 'boolean',
              },
              validDid: {
                type: 'boolean',
              },
              repoCommit: {
                type: 'string',
                format: 'cid',
              },
              repoRev: {
                type: 'string',
              },
              repoBlocks: {
                type: 'integer',
              },
              indexedRecords: {
                type: 'integer',
              },
              privateStateValues: {
                type: 'integer',
              },
              expectedBlobs: {
                type: 'integer',
              },
              importedBlobs: {
                type: 'integer',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoServerConfirmEmail: {
    lexicon: 1,
    id: 'com.atproto.server.confirmEmail',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Confirm an email using a token from com.atproto.server.requestEmailConfirmation.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['email', 'token'],
            properties: {
              email: {
                type: 'string',
              },
              token: {
                type: 'string',
              },
            },
          },
        },
        errors: [
          {
            name: 'AccountNotFound',
          },
          {
            name: 'ExpiredToken',
          },
          {
            name: 'InvalidToken',
          },
          {
            name: 'InvalidEmail',
          },
        ],
      },
    },
  },
  ComAtprotoServerCreateAccount: {
    lexicon: 1,
    id: 'com.atproto.server.createAccount',
    defs: {
      main: {
        type: 'procedure',
        description: 'Create an account. Implemented by PDS.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['handle'],
            properties: {
              email: {
                type: 'string',
              },
              handle: {
                type: 'string',
                format: 'handle',
                description: 'Requested handle for the account.',
              },
              did: {
                type: 'string',
                format: 'did',
                description:
                  'Pre-existing atproto DID, being imported to a new account.',
              },
              inviteCode: {
                type: 'string',
              },
              verificationCode: {
                type: 'string',
              },
              verificationPhone: {
                type: 'string',
              },
              password: {
                type: 'string',
                description:
                  'Initial account password. May need to meet instance-specific password strength requirements.',
              },
              recoveryKey: {
                type: 'string',
                description:
                  'DID PLC rotation key (aka, recovery key) to be included in PLC creation operation.',
              },
              plcOp: {
                type: 'unknown',
                description:
                  'A signed DID PLC operation to be submitted as part of importing an existing account to this instance. NOTE: this optional field may be updated when full account migration is implemented.',
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            description:
              'Account login session returned on successful account creation.',
            required: ['accessJwt', 'refreshJwt', 'handle', 'did'],
            properties: {
              accessJwt: {
                type: 'string',
              },
              refreshJwt: {
                type: 'string',
              },
              handle: {
                type: 'string',
                format: 'handle',
              },
              did: {
                type: 'string',
                format: 'did',
                description: 'The DID of the new account.',
              },
              didDoc: {
                type: 'unknown',
                description: 'Complete DID document.',
              },
            },
          },
        },
        errors: [
          {
            name: 'InvalidHandle',
          },
          {
            name: 'InvalidPassword',
          },
          {
            name: 'InvalidInviteCode',
          },
          {
            name: 'HandleNotAvailable',
          },
          {
            name: 'UnsupportedDomain',
          },
          {
            name: 'UnresolvableDid',
          },
          {
            name: 'IncompatibleDidDoc',
          },
        ],
      },
    },
  },
  ComAtprotoServerCreateAppPassword: {
    lexicon: 1,
    id: 'com.atproto.server.createAppPassword',
    defs: {
      main: {
        type: 'procedure',
        description: 'Create an App Password.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['name'],
            properties: {
              name: {
                type: 'string',
                description:
                  'A short name for the App Password, to help distinguish them.',
              },
              privileged: {
                type: 'boolean',
                description:
                  "If an app password has 'privileged' access to possibly sensitive account state. Meant for use with trusted clients.",
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:com.atproto.server.createAppPassword#appPassword',
          },
        },
        errors: [
          {
            name: 'AccountTakedown',
          },
        ],
      },
      appPassword: {
        type: 'object',
        required: ['name', 'password', 'createdAt'],
        properties: {
          name: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
          createdAt: {
            type: 'string',
            format: 'datetime',
          },
          privileged: {
            type: 'boolean',
          },
        },
      },
    },
  },
  ComAtprotoServerCreateInviteCode: {
    lexicon: 1,
    id: 'com.atproto.server.createInviteCode',
    defs: {
      main: {
        type: 'procedure',
        description: 'Create an invite code.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['useCount'],
            properties: {
              useCount: {
                type: 'integer',
              },
              forAccount: {
                type: 'string',
                format: 'did',
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['code'],
            properties: {
              code: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoServerCreateInviteCodes: {
    lexicon: 1,
    id: 'com.atproto.server.createInviteCodes',
    defs: {
      main: {
        type: 'procedure',
        description: 'Create invite codes.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['codeCount', 'useCount'],
            properties: {
              codeCount: {
                type: 'integer',
                default: 1,
              },
              useCount: {
                type: 'integer',
              },
              forAccounts: {
                type: 'array',
                items: {
                  type: 'string',
                  format: 'did',
                },
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['codes'],
            properties: {
              codes: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:com.atproto.server.createInviteCodes#accountCodes',
                },
              },
            },
          },
        },
      },
      accountCodes: {
        type: 'object',
        required: ['account', 'codes'],
        properties: {
          account: {
            type: 'string',
          },
          codes: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  ComAtprotoServerCreateSession: {
    lexicon: 1,
    id: 'com.atproto.server.createSession',
    defs: {
      main: {
        type: 'procedure',
        description: 'Create an authentication session.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['identifier', 'password'],
            properties: {
              identifier: {
                type: 'string',
                description:
                  'Handle or other identifier supported by the server for the authenticating user.',
              },
              password: {
                type: 'string',
              },
              authFactorToken: {
                type: 'string',
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['accessJwt', 'refreshJwt', 'handle', 'did'],
            properties: {
              accessJwt: {
                type: 'string',
              },
              refreshJwt: {
                type: 'string',
              },
              handle: {
                type: 'string',
                format: 'handle',
              },
              did: {
                type: 'string',
                format: 'did',
              },
              didDoc: {
                type: 'unknown',
              },
              email: {
                type: 'string',
              },
              emailConfirmed: {
                type: 'boolean',
              },
              emailAuthFactor: {
                type: 'boolean',
              },
              active: {
                type: 'boolean',
              },
              status: {
                type: 'string',
                description:
                  'If active=false, this optional field indicates a possible reason for why the account is not active. If active=false and no status is supplied, then the host makes no claim for why the repository is no longer being hosted.',
                knownValues: ['takendown', 'suspended', 'deactivated'],
              },
            },
          },
        },
        errors: [
          {
            name: 'AccountTakedown',
          },
          {
            name: 'AuthFactorTokenRequired',
          },
        ],
      },
    },
  },
  ComAtprotoServerDeactivateAccount: {
    lexicon: 1,
    id: 'com.atproto.server.deactivateAccount',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Deactivates a currently active account. Stops serving of repo, and future writes to repo until reactivated. Used to finalize account migration with the old host after the account has been activated on the new host.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              deleteAfter: {
                type: 'string',
                format: 'datetime',
                description:
                  'A recommendation to server as to how long they should hold onto the deactivated account before deleting.',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoServerDefs: {
    lexicon: 1,
    id: 'com.atproto.server.defs',
    defs: {
      inviteCode: {
        type: 'object',
        required: [
          'code',
          'available',
          'disabled',
          'forAccount',
          'createdBy',
          'createdAt',
          'uses',
        ],
        properties: {
          code: {
            type: 'string',
          },
          available: {
            type: 'integer',
          },
          disabled: {
            type: 'boolean',
          },
          forAccount: {
            type: 'string',
          },
          createdBy: {
            type: 'string',
          },
          createdAt: {
            type: 'string',
            format: 'datetime',
          },
          uses: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.server.defs#inviteCodeUse',
            },
          },
        },
      },
      inviteCodeUse: {
        type: 'object',
        required: ['usedBy', 'usedAt'],
        properties: {
          usedBy: {
            type: 'string',
            format: 'did',
          },
          usedAt: {
            type: 'string',
            format: 'datetime',
          },
        },
      },
    },
  },
  ComAtprotoServerDeleteAccount: {
    lexicon: 1,
    id: 'com.atproto.server.deleteAccount',
    defs: {
      main: {
        type: 'procedure',
        description:
          "Delete an actor's account with a token and password. Can only be called after requesting a deletion token. Requires auth.",
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['did', 'password', 'token'],
            properties: {
              did: {
                type: 'string',
                format: 'did',
              },
              password: {
                type: 'string',
              },
              token: {
                type: 'string',
              },
            },
          },
        },
        errors: [
          {
            name: 'ExpiredToken',
          },
          {
            name: 'InvalidToken',
          },
        ],
      },
    },
  },
  ComAtprotoServerDeleteSession: {
    lexicon: 1,
    id: 'com.atproto.server.deleteSession',
    defs: {
      main: {
        type: 'procedure',
        description: 'Delete the current session. Requires auth.',
      },
    },
  },
  ComAtprotoServerDescribeServer: {
    lexicon: 1,
    id: 'com.atproto.server.describeServer',
    defs: {
      main: {
        type: 'query',
        description:
          "Describes the server's account creation requirements and capabilities. Implemented by PDS.",
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['did', 'availableUserDomains'],
            properties: {
              inviteCodeRequired: {
                type: 'boolean',
                description:
                  'If true, an invite code must be supplied to create an account on this instance.',
              },
              phoneVerificationRequired: {
                type: 'boolean',
                description:
                  'If true, a phone verification token must be supplied to create an account on this instance.',
              },
              availableUserDomains: {
                type: 'array',
                description:
                  'List of domain suffixes that can be used in account handles.',
                items: {
                  type: 'string',
                },
              },
              links: {
                type: 'ref',
                description: 'URLs of service policy documents.',
                ref: 'lex:com.atproto.server.describeServer#links',
              },
              contact: {
                type: 'ref',
                description: 'Contact information',
                ref: 'lex:com.atproto.server.describeServer#contact',
              },
              did: {
                type: 'string',
                format: 'did',
              },
            },
          },
        },
      },
      links: {
        type: 'object',
        properties: {
          privacyPolicy: {
            type: 'string',
            format: 'uri',
          },
          termsOfService: {
            type: 'string',
            format: 'uri',
          },
        },
      },
      contact: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
          },
        },
      },
    },
  },
  ComAtprotoServerGetAccountInviteCodes: {
    lexicon: 1,
    id: 'com.atproto.server.getAccountInviteCodes',
    defs: {
      main: {
        type: 'query',
        description:
          'Get all invite codes for the current account. Requires auth.',
        parameters: {
          type: 'params',
          properties: {
            includeUsed: {
              type: 'boolean',
              default: true,
            },
            createAvailable: {
              type: 'boolean',
              default: true,
              description:
                "Controls whether any new 'earned' but not 'created' invites should be created.",
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['codes'],
            properties: {
              codes: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:com.atproto.server.defs#inviteCode',
                },
              },
            },
          },
        },
        errors: [
          {
            name: 'DuplicateCreate',
          },
        ],
      },
    },
  },
  ComAtprotoServerGetServiceAuth: {
    lexicon: 1,
    id: 'com.atproto.server.getServiceAuth',
    defs: {
      main: {
        type: 'query',
        description:
          'Get a signed token on behalf of the requesting DID for the requested service.',
        parameters: {
          type: 'params',
          required: ['aud'],
          properties: {
            aud: {
              type: 'string',
              format: 'did',
              description:
                'The DID of the service that the token will be used to authenticate with',
            },
            exp: {
              type: 'integer',
              description:
                'The time in Unix Epoch seconds that the JWT expires. Defaults to 60 seconds in the future. The service may enforce certain time bounds on tokens depending on the requested scope.',
            },
            lxm: {
              type: 'string',
              format: 'nsid',
              description:
                'Lexicon (XRPC) method to bind the requested token to',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['token'],
            properties: {
              token: {
                type: 'string',
              },
            },
          },
        },
        errors: [
          {
            name: 'BadExpiration',
            description:
              'Indicates that the requested expiration date is not a valid. May be in the past or may be reliant on the requested scopes.',
          },
        ],
      },
    },
  },
  ComAtprotoServerGetSession: {
    lexicon: 1,
    id: 'com.atproto.server.getSession',
    defs: {
      main: {
        type: 'query',
        description:
          'Get information about the current auth session. Requires auth.',
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['handle', 'did'],
            properties: {
              handle: {
                type: 'string',
                format: 'handle',
              },
              did: {
                type: 'string',
                format: 'did',
              },
              email: {
                type: 'string',
              },
              emailConfirmed: {
                type: 'boolean',
              },
              emailAuthFactor: {
                type: 'boolean',
              },
              didDoc: {
                type: 'unknown',
              },
              active: {
                type: 'boolean',
              },
              status: {
                type: 'string',
                description:
                  'If active=false, this optional field indicates a possible reason for why the account is not active. If active=false and no status is supplied, then the host makes no claim for why the repository is no longer being hosted.',
                knownValues: ['takendown', 'suspended', 'deactivated'],
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoServerListAppPasswords: {
    lexicon: 1,
    id: 'com.atproto.server.listAppPasswords',
    defs: {
      main: {
        type: 'query',
        description: 'List all App Passwords.',
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['passwords'],
            properties: {
              passwords: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:com.atproto.server.listAppPasswords#appPassword',
                },
              },
            },
          },
        },
        errors: [
          {
            name: 'AccountTakedown',
          },
        ],
      },
      appPassword: {
        type: 'object',
        required: ['name', 'createdAt'],
        properties: {
          name: {
            type: 'string',
          },
          createdAt: {
            type: 'string',
            format: 'datetime',
          },
          privileged: {
            type: 'boolean',
          },
        },
      },
    },
  },
  ComAtprotoServerRefreshSession: {
    lexicon: 1,
    id: 'com.atproto.server.refreshSession',
    defs: {
      main: {
        type: 'procedure',
        description:
          "Refresh an authentication session. Requires auth using the 'refreshJwt' (not the 'accessJwt').",
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['accessJwt', 'refreshJwt', 'handle', 'did'],
            properties: {
              accessJwt: {
                type: 'string',
              },
              refreshJwt: {
                type: 'string',
              },
              handle: {
                type: 'string',
                format: 'handle',
              },
              did: {
                type: 'string',
                format: 'did',
              },
              didDoc: {
                type: 'unknown',
              },
              active: {
                type: 'boolean',
              },
              status: {
                type: 'string',
                description:
                  "Hosting status of the account. If not specified, then assume 'active'.",
                knownValues: ['takendown', 'suspended', 'deactivated'],
              },
            },
          },
        },
        errors: [
          {
            name: 'AccountTakedown',
          },
        ],
      },
    },
  },
  ComAtprotoServerRequestAccountDelete: {
    lexicon: 1,
    id: 'com.atproto.server.requestAccountDelete',
    defs: {
      main: {
        type: 'procedure',
        description: 'Initiate a user account deletion via email.',
      },
    },
  },
  ComAtprotoServerRequestEmailConfirmation: {
    lexicon: 1,
    id: 'com.atproto.server.requestEmailConfirmation',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Request an email with a code to confirm ownership of email.',
      },
    },
  },
  ComAtprotoServerRequestEmailUpdate: {
    lexicon: 1,
    id: 'com.atproto.server.requestEmailUpdate',
    defs: {
      main: {
        type: 'procedure',
        description: 'Request a token in order to update email.',
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['tokenRequired'],
            properties: {
              tokenRequired: {
                type: 'boolean',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoServerRequestPasswordReset: {
    lexicon: 1,
    id: 'com.atproto.server.requestPasswordReset',
    defs: {
      main: {
        type: 'procedure',
        description: 'Initiate a user account password reset via email.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['email'],
            properties: {
              email: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoServerReserveSigningKey: {
    lexicon: 1,
    id: 'com.atproto.server.reserveSigningKey',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Reserve a repo signing key, for use with account creation. Necessary so that a DID PLC update operation can be constructed during an account migraiton. Public and does not require auth; implemented by PDS. NOTE: this endpoint may change when full account migration is implemented.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              did: {
                type: 'string',
                format: 'did',
                description: 'The DID to reserve a key for.',
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['signingKey'],
            properties: {
              signingKey: {
                type: 'string',
                description:
                  'The public key for the reserved signing key, in did:key serialization.',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoServerResetPassword: {
    lexicon: 1,
    id: 'com.atproto.server.resetPassword',
    defs: {
      main: {
        type: 'procedure',
        description: 'Reset a user account password using a token.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['token', 'password'],
            properties: {
              token: {
                type: 'string',
              },
              password: {
                type: 'string',
              },
            },
          },
        },
        errors: [
          {
            name: 'ExpiredToken',
          },
          {
            name: 'InvalidToken',
          },
        ],
      },
    },
  },
  ComAtprotoServerRevokeAppPassword: {
    lexicon: 1,
    id: 'com.atproto.server.revokeAppPassword',
    defs: {
      main: {
        type: 'procedure',
        description: 'Revoke an App Password by name.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['name'],
            properties: {
              name: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoServerUpdateEmail: {
    lexicon: 1,
    id: 'com.atproto.server.updateEmail',
    defs: {
      main: {
        type: 'procedure',
        description: "Update an account's email.",
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['email'],
            properties: {
              email: {
                type: 'string',
              },
              emailAuthFactor: {
                type: 'boolean',
              },
              token: {
                type: 'string',
                description:
                  "Requires a token from com.atproto.sever.requestEmailUpdate if the account's email has been confirmed.",
              },
            },
          },
        },
        errors: [
          {
            name: 'ExpiredToken',
          },
          {
            name: 'InvalidToken',
          },
          {
            name: 'TokenRequired',
          },
        ],
      },
    },
  },
  ComAtprotoSyncGetBlob: {
    lexicon: 1,
    id: 'com.atproto.sync.getBlob',
    defs: {
      main: {
        type: 'query',
        description:
          'Get a blob associated with a given account. Returns the full blob as originally uploaded. Does not require auth; implemented by PDS.',
        parameters: {
          type: 'params',
          required: ['did', 'cid'],
          properties: {
            did: {
              type: 'string',
              format: 'did',
              description: 'The DID of the account.',
            },
            cid: {
              type: 'string',
              format: 'cid',
              description: 'The CID of the blob to fetch',
            },
          },
        },
        output: {
          encoding: '*/*',
        },
        errors: [
          {
            name: 'BlobNotFound',
          },
          {
            name: 'RepoNotFound',
          },
          {
            name: 'RepoTakendown',
          },
          {
            name: 'RepoSuspended',
          },
          {
            name: 'RepoDeactivated',
          },
        ],
      },
    },
  },
  ComAtprotoSyncGetBlocks: {
    lexicon: 1,
    id: 'com.atproto.sync.getBlocks',
    defs: {
      main: {
        type: 'query',
        description:
          'Get data blocks from a given repo, by CID. For example, intermediate MST nodes, or records. Does not require auth; implemented by PDS.',
        parameters: {
          type: 'params',
          required: ['did', 'cids'],
          properties: {
            did: {
              type: 'string',
              format: 'did',
              description: 'The DID of the repo.',
            },
            cids: {
              type: 'array',
              items: {
                type: 'string',
                format: 'cid',
              },
            },
          },
        },
        output: {
          encoding: 'application/vnd.ipld.car',
        },
        errors: [
          {
            name: 'BlockNotFound',
          },
          {
            name: 'RepoNotFound',
          },
          {
            name: 'RepoTakendown',
          },
          {
            name: 'RepoSuspended',
          },
          {
            name: 'RepoDeactivated',
          },
        ],
      },
    },
  },
  ComAtprotoSyncGetCheckout: {
    lexicon: 1,
    id: 'com.atproto.sync.getCheckout',
    defs: {
      main: {
        type: 'query',
        description: 'DEPRECATED - please use com.atproto.sync.getRepo instead',
        parameters: {
          type: 'params',
          required: ['did'],
          properties: {
            did: {
              type: 'string',
              format: 'did',
              description: 'The DID of the repo.',
            },
          },
        },
        output: {
          encoding: 'application/vnd.ipld.car',
        },
      },
    },
  },
  ComAtprotoSyncGetHead: {
    lexicon: 1,
    id: 'com.atproto.sync.getHead',
    defs: {
      main: {
        type: 'query',
        description:
          'DEPRECATED - please use com.atproto.sync.getLatestCommit instead',
        parameters: {
          type: 'params',
          required: ['did'],
          properties: {
            did: {
              type: 'string',
              format: 'did',
              description: 'The DID of the repo.',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['root'],
            properties: {
              root: {
                type: 'string',
                format: 'cid',
              },
            },
          },
        },
        errors: [
          {
            name: 'HeadNotFound',
          },
        ],
      },
    },
  },
  ComAtprotoSyncGetLatestCommit: {
    lexicon: 1,
    id: 'com.atproto.sync.getLatestCommit',
    defs: {
      main: {
        type: 'query',
        description:
          'Get the current commit CID & revision of the specified repo. Does not require auth.',
        parameters: {
          type: 'params',
          required: ['did'],
          properties: {
            did: {
              type: 'string',
              format: 'did',
              description: 'The DID of the repo.',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['cid', 'rev'],
            properties: {
              cid: {
                type: 'string',
                format: 'cid',
              },
              rev: {
                type: 'string',
              },
            },
          },
        },
        errors: [
          {
            name: 'RepoNotFound',
          },
          {
            name: 'RepoTakendown',
          },
          {
            name: 'RepoSuspended',
          },
          {
            name: 'RepoDeactivated',
          },
        ],
      },
    },
  },
  ComAtprotoSyncGetRecord: {
    lexicon: 1,
    id: 'com.atproto.sync.getRecord',
    defs: {
      main: {
        type: 'query',
        description:
          'Get data blocks needed to prove the existence or non-existence of record in the current version of repo. Does not require auth.',
        parameters: {
          type: 'params',
          required: ['did', 'collection', 'rkey'],
          properties: {
            did: {
              type: 'string',
              format: 'did',
              description: 'The DID of the repo.',
            },
            collection: {
              type: 'string',
              format: 'nsid',
            },
            rkey: {
              type: 'string',
              description: 'Record Key',
            },
            commit: {
              type: 'string',
              format: 'cid',
              description:
                'DEPRECATED: referenced a repo commit by CID, and retrieved record as of that commit',
            },
          },
        },
        output: {
          encoding: 'application/vnd.ipld.car',
        },
        errors: [
          {
            name: 'RecordNotFound',
          },
          {
            name: 'RepoNotFound',
          },
          {
            name: 'RepoTakendown',
          },
          {
            name: 'RepoSuspended',
          },
          {
            name: 'RepoDeactivated',
          },
        ],
      },
    },
  },
  ComAtprotoSyncGetRepo: {
    lexicon: 1,
    id: 'com.atproto.sync.getRepo',
    defs: {
      main: {
        type: 'query',
        description:
          "Download a repository export as CAR file. Optionally only a 'diff' since a previous revision. Does not require auth; implemented by PDS.",
        parameters: {
          type: 'params',
          required: ['did'],
          properties: {
            did: {
              type: 'string',
              format: 'did',
              description: 'The DID of the repo.',
            },
            since: {
              type: 'string',
              description:
                "The revision ('rev') of the repo to create a diff from.",
            },
          },
        },
        output: {
          encoding: 'application/vnd.ipld.car',
        },
        errors: [
          {
            name: 'RepoNotFound',
          },
          {
            name: 'RepoTakendown',
          },
          {
            name: 'RepoSuspended',
          },
          {
            name: 'RepoDeactivated',
          },
        ],
      },
    },
  },
  ComAtprotoSyncGetRepoStatus: {
    lexicon: 1,
    id: 'com.atproto.sync.getRepoStatus',
    defs: {
      main: {
        type: 'query',
        description:
          'Get the hosting status for a repository, on this server. Expected to be implemented by PDS and Relay.',
        parameters: {
          type: 'params',
          required: ['did'],
          properties: {
            did: {
              type: 'string',
              format: 'did',
              description: 'The DID of the repo.',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['did', 'active'],
            properties: {
              did: {
                type: 'string',
                format: 'did',
              },
              active: {
                type: 'boolean',
              },
              status: {
                type: 'string',
                description:
                  'If active=false, this optional field indicates a possible reason for why the account is not active. If active=false and no status is supplied, then the host makes no claim for why the repository is no longer being hosted.',
                knownValues: ['takendown', 'suspended', 'deactivated'],
              },
              rev: {
                type: 'string',
                description:
                  'Optional field, the current rev of the repo, if active=true',
              },
            },
          },
        },
        errors: [
          {
            name: 'RepoNotFound',
          },
        ],
      },
    },
  },
  ComAtprotoSyncListBlobs: {
    lexicon: 1,
    id: 'com.atproto.sync.listBlobs',
    defs: {
      main: {
        type: 'query',
        description:
          'List blob CIDs for an account, since some repo revision. Does not require auth; implemented by PDS.',
        parameters: {
          type: 'params',
          required: ['did'],
          properties: {
            did: {
              type: 'string',
              format: 'did',
              description: 'The DID of the repo.',
            },
            since: {
              type: 'string',
              description: 'Optional revision of the repo to list blobs since.',
            },
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 1000,
              default: 500,
            },
            cursor: {
              type: 'string',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['cids'],
            properties: {
              cursor: {
                type: 'string',
              },
              cids: {
                type: 'array',
                items: {
                  type: 'string',
                  format: 'cid',
                },
              },
            },
          },
        },
        errors: [
          {
            name: 'RepoNotFound',
          },
          {
            name: 'RepoTakendown',
          },
          {
            name: 'RepoSuspended',
          },
          {
            name: 'RepoDeactivated',
          },
        ],
      },
    },
  },
  ComAtprotoSyncListRepos: {
    lexicon: 1,
    id: 'com.atproto.sync.listRepos',
    defs: {
      main: {
        type: 'query',
        description:
          'Enumerates all the DID, rev, and commit CID for all repos hosted by this service. Does not require auth; implemented by PDS and Relay.',
        parameters: {
          type: 'params',
          properties: {
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 1000,
              default: 500,
            },
            cursor: {
              type: 'string',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['repos'],
            properties: {
              cursor: {
                type: 'string',
              },
              repos: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:com.atproto.sync.listRepos#repo',
                },
              },
            },
          },
        },
      },
      repo: {
        type: 'object',
        required: ['did', 'head', 'rev'],
        properties: {
          did: {
            type: 'string',
            format: 'did',
          },
          head: {
            type: 'string',
            format: 'cid',
            description: 'Current repo commit CID',
          },
          rev: {
            type: 'string',
          },
          active: {
            type: 'boolean',
          },
          status: {
            type: 'string',
            description:
              'If active=false, this optional field indicates a possible reason for why the account is not active. If active=false and no status is supplied, then the host makes no claim for why the repository is no longer being hosted.',
            knownValues: ['takendown', 'suspended', 'deactivated'],
          },
        },
      },
    },
  },
  ComAtprotoSyncNotifyOfUpdate: {
    lexicon: 1,
    id: 'com.atproto.sync.notifyOfUpdate',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Notify a crawling service of a recent update, and that crawling should resume. Intended use is after a gap between repo stream events caused the crawling service to disconnect. Does not require auth; implemented by Relay.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['hostname'],
            properties: {
              hostname: {
                type: 'string',
                description:
                  'Hostname of the current service (usually a PDS) that is notifying of update.',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoSyncRequestCrawl: {
    lexicon: 1,
    id: 'com.atproto.sync.requestCrawl',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Request a service to persistently crawl hosted repos. Expected use is new PDS instances declaring their existence to Relays. Does not require auth.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['hostname'],
            properties: {
              hostname: {
                type: 'string',
                description:
                  'Hostname of the current service (eg, PDS) that is requesting to be crawled.',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoSyncSubscribeRepos: {
    lexicon: 1,
    id: 'com.atproto.sync.subscribeRepos',
    defs: {
      main: {
        type: 'subscription',
        description:
          'Repository event stream, aka Firehose endpoint. Outputs repo commits with diff data, and identity update events, for all repositories on the current server. See the atproto specifications for details around stream sequencing, repo versioning, CAR diff format, and more. Public and does not require auth; implemented by PDS and Relay.',
        parameters: {
          type: 'params',
          properties: {
            cursor: {
              type: 'integer',
              description: 'The last known event seq number to backfill from.',
            },
          },
        },
        message: {
          schema: {
            type: 'union',
            refs: [
              'lex:com.atproto.sync.subscribeRepos#commit',
              'lex:com.atproto.sync.subscribeRepos#identity',
              'lex:com.atproto.sync.subscribeRepos#account',
              'lex:com.atproto.sync.subscribeRepos#handle',
              'lex:com.atproto.sync.subscribeRepos#migrate',
              'lex:com.atproto.sync.subscribeRepos#tombstone',
              'lex:com.atproto.sync.subscribeRepos#info',
            ],
          },
        },
        errors: [
          {
            name: 'FutureCursor',
          },
          {
            name: 'ConsumerTooSlow',
            description:
              'If the consumer of the stream can not keep up with events, and a backlog gets too large, the server will drop the connection.',
          },
        ],
      },
      commit: {
        type: 'object',
        description:
          'Represents an update of repository state. Note that empty commits are allowed, which include no repo data changes, but an update to rev and signature.',
        required: [
          'seq',
          'rebase',
          'tooBig',
          'repo',
          'commit',
          'rev',
          'since',
          'blocks',
          'ops',
          'blobs',
          'time',
        ],
        nullable: ['prev', 'since'],
        properties: {
          seq: {
            type: 'integer',
            description: 'The stream sequence number of this message.',
          },
          rebase: {
            type: 'boolean',
            description: 'DEPRECATED -- unused',
          },
          tooBig: {
            type: 'boolean',
            description:
              'Indicates that this commit contained too many ops, or data size was too large. Consumers will need to make a separate request to get missing data.',
          },
          repo: {
            type: 'string',
            format: 'did',
            description: 'The repo this event comes from.',
          },
          commit: {
            type: 'cid-link',
            description: 'Repo commit object CID.',
          },
          prev: {
            type: 'cid-link',
            description:
              'DEPRECATED -- unused. WARNING -- nullable and optional; stick with optional to ensure golang interoperability.',
          },
          rev: {
            type: 'string',
            description:
              'The rev of the emitted commit. Note that this information is also in the commit object included in blocks, unless this is a tooBig event.',
          },
          since: {
            type: 'string',
            description:
              'The rev of the last emitted commit from this repo (if any).',
          },
          blocks: {
            type: 'bytes',
            description:
              'CAR file containing relevant blocks, as a diff since the previous repo state.',
            maxLength: 1000000,
          },
          ops: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.sync.subscribeRepos#repoOp',
              description:
                'List of repo mutation operations in this commit (eg, records created, updated, or deleted).',
            },
            maxLength: 200,
          },
          blobs: {
            type: 'array',
            items: {
              type: 'cid-link',
              description:
                'List of new blobs (by CID) referenced by records in this commit.',
            },
          },
          time: {
            type: 'string',
            format: 'datetime',
            description:
              'Timestamp of when this message was originally broadcast.',
          },
        },
      },
      identity: {
        type: 'object',
        description:
          "Represents a change to an account's identity. Could be an updated handle, signing key, or pds hosting endpoint. Serves as a prod to all downstream services to refresh their identity cache.",
        required: ['seq', 'did', 'time'],
        properties: {
          seq: {
            type: 'integer',
          },
          did: {
            type: 'string',
            format: 'did',
          },
          time: {
            type: 'string',
            format: 'datetime',
          },
          handle: {
            type: 'string',
            format: 'handle',
            description:
              "The current handle for the account, or 'handle.invalid' if validation fails. This field is optional, might have been validated or passed-through from an upstream source. Semantics and behaviors for PDS vs Relay may evolve in the future; see atproto specs for more details.",
          },
        },
      },
      account: {
        type: 'object',
        description:
          "Represents a change to an account's status on a host (eg, PDS or Relay). The semantics of this event are that the status is at the host which emitted the event, not necessarily that at the currently active PDS. Eg, a Relay takedown would emit a takedown with active=false, even if the PDS is still active.",
        required: ['seq', 'did', 'time', 'active'],
        properties: {
          seq: {
            type: 'integer',
          },
          did: {
            type: 'string',
            format: 'did',
          },
          time: {
            type: 'string',
            format: 'datetime',
          },
          active: {
            type: 'boolean',
            description:
              'Indicates that the account has a repository which can be fetched from the host that emitted this event.',
          },
          status: {
            type: 'string',
            description:
              'If active=false, this optional field indicates a reason for why the account is not active.',
            knownValues: ['takendown', 'suspended', 'deleted', 'deactivated'],
          },
        },
      },
      handle: {
        type: 'object',
        description: 'DEPRECATED -- Use #identity event instead',
        required: ['seq', 'did', 'handle', 'time'],
        properties: {
          seq: {
            type: 'integer',
          },
          did: {
            type: 'string',
            format: 'did',
          },
          handle: {
            type: 'string',
            format: 'handle',
          },
          time: {
            type: 'string',
            format: 'datetime',
          },
        },
      },
      migrate: {
        type: 'object',
        description: 'DEPRECATED -- Use #account event instead',
        required: ['seq', 'did', 'migrateTo', 'time'],
        nullable: ['migrateTo'],
        properties: {
          seq: {
            type: 'integer',
          },
          did: {
            type: 'string',
            format: 'did',
          },
          migrateTo: {
            type: 'string',
          },
          time: {
            type: 'string',
            format: 'datetime',
          },
        },
      },
      tombstone: {
        type: 'object',
        description: 'DEPRECATED -- Use #account event instead',
        required: ['seq', 'did', 'time'],
        properties: {
          seq: {
            type: 'integer',
          },
          did: {
            type: 'string',
            format: 'did',
          },
          time: {
            type: 'string',
            format: 'datetime',
          },
        },
      },
      info: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {
            type: 'string',
            knownValues: ['OutdatedCursor'],
          },
          message: {
            type: 'string',
          },
        },
      },
      repoOp: {
        type: 'object',
        description: 'A repo operation, ie a mutation of a single record.',
        required: ['action', 'path', 'cid'],
        nullable: ['cid'],
        properties: {
          action: {
            type: 'string',
            knownValues: ['create', 'update', 'delete'],
          },
          path: {
            type: 'string',
          },
          cid: {
            type: 'cid-link',
            description:
              'For creates and updates, the new record CID. For deletions, null.',
          },
        },
      },
    },
  },
  ComAtprotoTempCheckSignupQueue: {
    lexicon: 1,
    id: 'com.atproto.temp.checkSignupQueue',
    defs: {
      main: {
        type: 'query',
        description: 'Check accounts location in signup queue.',
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['activated'],
            properties: {
              activated: {
                type: 'boolean',
              },
              placeInQueue: {
                type: 'integer',
              },
              estimatedTimeMs: {
                type: 'integer',
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoTempFetchLabels: {
    lexicon: 1,
    id: 'com.atproto.temp.fetchLabels',
    defs: {
      main: {
        type: 'query',
        description:
          'DEPRECATED: use queryLabels or subscribeLabels instead -- Fetch all labels from a labeler created after a certain date.',
        parameters: {
          type: 'params',
          properties: {
            since: {
              type: 'integer',
            },
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 250,
              default: 50,
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['labels'],
            properties: {
              labels: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:com.atproto.label.defs#label',
                },
              },
            },
          },
        },
      },
    },
  },
  ComAtprotoTempRequestPhoneVerification: {
    lexicon: 1,
    id: 'com.atproto.temp.requestPhoneVerification',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Request a verification code to be sent to the supplied phone number',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['phoneNumber'],
            properties: {
              phoneNumber: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
  AppBskyActorDefs: {
    lexicon: 1,
    id: 'app.bsky.actor.defs',
    defs: {
      profileViewBasic: {
        type: 'object',
        required: ['did', 'handle'],
        properties: {
          did: {
            type: 'string',
            format: 'did',
          },
          handle: {
            type: 'string',
            format: 'handle',
          },
          displayName: {
            type: 'string',
            maxGraphemes: 64,
            maxLength: 640,
          },
          avatar: {
            type: 'string',
            format: 'uri',
          },
          associated: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileAssociated',
          },
          viewer: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#viewerState',
          },
          labels: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#label',
            },
          },
          createdAt: {
            type: 'string',
            format: 'datetime',
          },
        },
      },
      profileView: {
        type: 'object',
        required: ['did', 'handle'],
        properties: {
          did: {
            type: 'string',
            format: 'did',
          },
          handle: {
            type: 'string',
            format: 'handle',
          },
          displayName: {
            type: 'string',
            maxGraphemes: 64,
            maxLength: 640,
          },
          description: {
            type: 'string',
            maxGraphemes: 256,
            maxLength: 2560,
          },
          avatar: {
            type: 'string',
            format: 'uri',
          },
          associated: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileAssociated',
          },
          indexedAt: {
            type: 'string',
            format: 'datetime',
          },
          createdAt: {
            type: 'string',
            format: 'datetime',
          },
          viewer: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#viewerState',
          },
          labels: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#label',
            },
          },
        },
      },
      profileViewDetailed: {
        type: 'object',
        required: ['did', 'handle'],
        properties: {
          did: {
            type: 'string',
            format: 'did',
          },
          handle: {
            type: 'string',
            format: 'handle',
          },
          displayName: {
            type: 'string',
            maxGraphemes: 64,
            maxLength: 640,
          },
          description: {
            type: 'string',
            maxGraphemes: 256,
            maxLength: 2560,
          },
          avatar: {
            type: 'string',
            format: 'uri',
          },
          banner: {
            type: 'string',
            format: 'uri',
          },
          followersCount: {
            type: 'integer',
          },
          followsCount: {
            type: 'integer',
          },
          postsCount: {
            type: 'integer',
          },
          associated: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileAssociated',
          },
          joinedViaStarterPack: {
            type: 'ref',
            ref: 'lex:app.bsky.graph.defs#starterPackViewBasic',
          },
          indexedAt: {
            type: 'string',
            format: 'datetime',
          },
          createdAt: {
            type: 'string',
            format: 'datetime',
          },
          viewer: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#viewerState',
          },
          labels: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#label',
            },
          },
        },
      },
      profileAssociated: {
        type: 'object',
        properties: {
          lists: {
            type: 'integer',
          },
          feedgens: {
            type: 'integer',
          },
          starterPacks: {
            type: 'integer',
          },
          labeler: {
            type: 'boolean',
          },
          chat: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileAssociatedChat',
          },
        },
      },
      profileAssociatedChat: {
        type: 'object',
        required: ['allowIncoming'],
        properties: {
          allowIncoming: {
            type: 'string',
            knownValues: ['all', 'none', 'following'],
          },
        },
      },
      viewerState: {
        type: 'object',
        description:
          "Metadata about the requesting account's relationship with the subject account. Only has meaningful content for authed requests.",
        properties: {
          muted: {
            type: 'boolean',
          },
          mutedByList: {
            type: 'ref',
            ref: 'lex:app.bsky.graph.defs#listViewBasic',
          },
          blockedBy: {
            type: 'boolean',
          },
          blocking: {
            type: 'string',
            format: 'at-uri',
          },
          blockingByList: {
            type: 'ref',
            ref: 'lex:app.bsky.graph.defs#listViewBasic',
          },
          following: {
            type: 'string',
            format: 'at-uri',
          },
          followedBy: {
            type: 'string',
            format: 'at-uri',
          },
          knownFollowers: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#knownFollowers',
          },
        },
      },
      knownFollowers: {
        type: 'object',
        description: "The subject's followers whom you also follow",
        required: ['count', 'followers'],
        properties: {
          count: {
            type: 'integer',
          },
          followers: {
            type: 'array',
            minLength: 0,
            maxLength: 5,
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.actor.defs#profileViewBasic',
            },
          },
        },
      },
      preferences: {
        type: 'array',
        items: {
          type: 'union',
          refs: [
            'lex:app.bsky.actor.defs#adultContentPref',
            'lex:app.bsky.actor.defs#contentLabelPref',
            'lex:app.bsky.actor.defs#savedFeedsPref',
            'lex:app.bsky.actor.defs#savedFeedsPrefV2',
            'lex:app.bsky.actor.defs#personalDetailsPref',
            'lex:app.bsky.actor.defs#feedViewPref',
            'lex:app.bsky.actor.defs#threadViewPref',
            'lex:app.bsky.actor.defs#interestsPref',
            'lex:app.bsky.actor.defs#mutedWordsPref',
            'lex:app.bsky.actor.defs#hiddenPostsPref',
            'lex:app.bsky.actor.defs#bskyAppStatePref',
            'lex:app.bsky.actor.defs#labelersPref',
          ],
        },
      },
      adultContentPref: {
        type: 'object',
        required: ['enabled'],
        properties: {
          enabled: {
            type: 'boolean',
            default: false,
          },
        },
      },
      contentLabelPref: {
        type: 'object',
        required: ['label', 'visibility'],
        properties: {
          labelerDid: {
            type: 'string',
            description:
              'Which labeler does this preference apply to? If undefined, applies globally.',
            format: 'did',
          },
          label: {
            type: 'string',
          },
          visibility: {
            type: 'string',
            knownValues: ['ignore', 'show', 'warn', 'hide'],
          },
        },
      },
      savedFeed: {
        type: 'object',
        required: ['id', 'type', 'value', 'pinned'],
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
            knownValues: ['feed', 'list', 'timeline'],
          },
          value: {
            type: 'string',
          },
          pinned: {
            type: 'boolean',
          },
        },
      },
      savedFeedsPrefV2: {
        type: 'object',
        required: ['items'],
        properties: {
          items: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.actor.defs#savedFeed',
            },
          },
        },
      },
      savedFeedsPref: {
        type: 'object',
        required: ['pinned', 'saved'],
        properties: {
          pinned: {
            type: 'array',
            items: {
              type: 'string',
              format: 'at-uri',
            },
          },
          saved: {
            type: 'array',
            items: {
              type: 'string',
              format: 'at-uri',
            },
          },
          timelineIndex: {
            type: 'integer',
          },
        },
      },
      personalDetailsPref: {
        type: 'object',
        properties: {
          birthDate: {
            type: 'string',
            format: 'datetime',
            description: 'The birth date of account owner.',
          },
        },
      },
      feedViewPref: {
        type: 'object',
        required: ['feed'],
        properties: {
          feed: {
            type: 'string',
            description:
              'The URI of the feed, or an identifier which describes the feed.',
          },
          hideReplies: {
            type: 'boolean',
            description: 'Hide replies in the feed.',
          },
          hideRepliesByUnfollowed: {
            type: 'boolean',
            description:
              'Hide replies in the feed if they are not by followed users.',
            default: true,
          },
          hideRepliesByLikeCount: {
            type: 'integer',
            description:
              'Hide replies in the feed if they do not have this number of likes.',
          },
          hideReposts: {
            type: 'boolean',
            description: 'Hide reposts in the feed.',
          },
          hideQuotePosts: {
            type: 'boolean',
            description: 'Hide quote posts in the feed.',
          },
        },
      },
      threadViewPref: {
        type: 'object',
        properties: {
          sort: {
            type: 'string',
            description: 'Sorting mode for threads.',
            knownValues: ['oldest', 'newest', 'most-likes', 'random'],
          },
          prioritizeFollowedUsers: {
            type: 'boolean',
            description: 'Show followed users at the top of all replies.',
          },
        },
      },
      interestsPref: {
        type: 'object',
        required: ['tags'],
        properties: {
          tags: {
            type: 'array',
            maxLength: 100,
            items: {
              type: 'string',
              maxLength: 640,
              maxGraphemes: 64,
            },
            description:
              "A list of tags which describe the account owner's interests gathered during onboarding.",
          },
        },
      },
      mutedWordTarget: {
        type: 'string',
        knownValues: ['content', 'tag'],
        maxLength: 640,
        maxGraphemes: 64,
      },
      mutedWord: {
        type: 'object',
        description: 'A word that the account owner has muted.',
        required: ['value', 'targets'],
        properties: {
          id: {
            type: 'string',
          },
          value: {
            type: 'string',
            description: 'The muted word itself.',
            maxLength: 10000,
            maxGraphemes: 1000,
          },
          targets: {
            type: 'array',
            description: 'The intended targets of the muted word.',
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.actor.defs#mutedWordTarget',
            },
          },
          actorTarget: {
            type: 'string',
            description:
              'Groups of users to apply the muted word to. If undefined, applies to all users.',
            knownValues: ['all', 'exclude-following'],
            default: 'all',
          },
          expiresAt: {
            type: 'string',
            format: 'datetime',
            description:
              'The date and time at which the muted word will expire and no longer be applied.',
          },
        },
      },
      mutedWordsPref: {
        type: 'object',
        required: ['items'],
        properties: {
          items: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.actor.defs#mutedWord',
            },
            description: 'A list of words the account owner has muted.',
          },
        },
      },
      hiddenPostsPref: {
        type: 'object',
        required: ['items'],
        properties: {
          items: {
            type: 'array',
            items: {
              type: 'string',
              format: 'at-uri',
            },
            description:
              'A list of URIs of posts the account owner has hidden.',
          },
        },
      },
      labelersPref: {
        type: 'object',
        required: ['labelers'],
        properties: {
          labelers: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.actor.defs#labelerPrefItem',
            },
          },
        },
      },
      labelerPrefItem: {
        type: 'object',
        required: ['did'],
        properties: {
          did: {
            type: 'string',
            format: 'did',
          },
        },
      },
      bskyAppStatePref: {
        description:
          "A grab bag of state that's specific to the bsky.app program. Third-party apps shouldn't use this.",
        type: 'object',
        properties: {
          activeProgressGuide: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#bskyAppProgressGuide',
          },
          queuedNudges: {
            description:
              'An array of tokens which identify nudges (modals, popups, tours, highlight dots) that should be shown to the user.',
            type: 'array',
            maxLength: 1000,
            items: {
              type: 'string',
              maxLength: 100,
            },
          },
          nuxs: {
            description: 'Storage for NUXs the user has encountered.',
            type: 'array',
            maxLength: 100,
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.actor.defs#nux',
            },
          },
        },
      },
      bskyAppProgressGuide: {
        description:
          'If set, an active progress guide. Once completed, can be set to undefined. Should have unspecced fields tracking progress.',
        type: 'object',
        required: ['guide'],
        properties: {
          guide: {
            type: 'string',
            maxLength: 100,
          },
        },
      },
      nux: {
        type: 'object',
        description: 'A new user experiences (NUX) storage object',
        required: ['id', 'completed'],
        properties: {
          id: {
            type: 'string',
            maxLength: 100,
          },
          completed: {
            type: 'boolean',
            default: false,
          },
          data: {
            description:
              'Arbitrary data for the NUX. The structure is defined by the NUX itself. Limited to 300 characters.',
            type: 'string',
            maxLength: 3000,
            maxGraphemes: 300,
          },
          expiresAt: {
            type: 'string',
            format: 'datetime',
            description:
              'The date and time at which the NUX will expire and should be considered completed.',
          },
        },
      },
    },
  },
  AppBskyActorProfile: {
    lexicon: 1,
    id: 'app.bsky.actor.profile',
    defs: {
      main: {
        type: 'record',
        description: 'A declaration of a Bluesky account profile.',
        key: 'literal:self',
        record: {
          type: 'object',
          properties: {
            displayName: {
              type: 'string',
              maxGraphemes: 64,
              maxLength: 640,
            },
            description: {
              type: 'string',
              description: 'Free-form profile description text.',
              maxGraphemes: 256,
              maxLength: 2560,
            },
            avatar: {
              type: 'blob',
              description:
                "Small image to be displayed next to posts from account. AKA, 'profile picture'",
              accept: ['image/png', 'image/jpeg'],
              maxSize: 1000000,
            },
            banner: {
              type: 'blob',
              description:
                'Larger horizontal image to display behind profile view.',
              accept: ['image/png', 'image/jpeg'],
              maxSize: 1000000,
            },
            labels: {
              type: 'union',
              description:
                'Self-label values, specific to the Bluesky application, on the overall account.',
              refs: ['lex:com.atproto.label.defs#selfLabels'],
            },
            joinedViaStarterPack: {
              type: 'ref',
              ref: 'lex:com.atproto.repo.strongRef',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  AppBskyEmbedDefs: {
    lexicon: 1,
    id: 'app.bsky.embed.defs',
    defs: {
      aspectRatio: {
        type: 'object',
        description:
          'width:height represents an aspect ratio. It may be approximate, and may not correspond to absolute dimensions in any given unit.',
        required: ['width', 'height'],
        properties: {
          width: {
            type: 'integer',
            minimum: 1,
          },
          height: {
            type: 'integer',
            minimum: 1,
          },
        },
      },
    },
  },
  AppBskyEmbedExternal: {
    lexicon: 1,
    id: 'app.bsky.embed.external',
    defs: {
      main: {
        type: 'object',
        description:
          "A representation of some externally linked content (eg, a URL and 'card'), embedded in a Bluesky record (eg, a post).",
        required: ['external'],
        properties: {
          external: {
            type: 'ref',
            ref: 'lex:app.bsky.embed.external#external',
          },
        },
      },
      external: {
        type: 'object',
        required: ['uri', 'title', 'description'],
        properties: {
          uri: {
            type: 'string',
            format: 'uri',
          },
          title: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          thumb: {
            type: 'blob',
            accept: ['image/*'],
            maxSize: 1000000,
          },
        },
      },
      view: {
        type: 'object',
        required: ['external'],
        properties: {
          external: {
            type: 'ref',
            ref: 'lex:app.bsky.embed.external#viewExternal',
          },
        },
      },
      viewExternal: {
        type: 'object',
        required: ['uri', 'title', 'description'],
        properties: {
          uri: {
            type: 'string',
            format: 'uri',
          },
          title: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          thumb: {
            type: 'string',
            format: 'uri',
          },
        },
      },
    },
  },
  AppBskyEmbedImages: {
    lexicon: 1,
    id: 'app.bsky.embed.images',
    description: 'A set of images embedded in a Bluesky record (eg, a post).',
    defs: {
      main: {
        type: 'object',
        required: ['images'],
        properties: {
          images: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.embed.images#image',
            },
            maxLength: 4,
          },
        },
      },
      image: {
        type: 'object',
        required: ['image', 'alt'],
        properties: {
          image: {
            type: 'blob',
            accept: ['image/*'],
            maxSize: 1000000,
          },
          alt: {
            type: 'string',
            description:
              'Alt text description of the image, for accessibility.',
          },
          aspectRatio: {
            type: 'ref',
            ref: 'lex:app.bsky.embed.defs#aspectRatio',
          },
        },
      },
      view: {
        type: 'object',
        required: ['images'],
        properties: {
          images: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.embed.images#viewImage',
            },
            maxLength: 4,
          },
        },
      },
      viewImage: {
        type: 'object',
        required: ['thumb', 'fullsize', 'alt'],
        properties: {
          thumb: {
            type: 'string',
            format: 'uri',
            description:
              'Fully-qualified URL where a thumbnail of the image can be fetched. For example, CDN location provided by the App View.',
          },
          fullsize: {
            type: 'string',
            format: 'uri',
            description:
              'Fully-qualified URL where a large version of the image can be fetched. May or may not be the exact original blob. For example, CDN location provided by the App View.',
          },
          alt: {
            type: 'string',
            description:
              'Alt text description of the image, for accessibility.',
          },
          aspectRatio: {
            type: 'ref',
            ref: 'lex:app.bsky.embed.defs#aspectRatio',
          },
        },
      },
    },
  },
  AppBskyEmbedRecord: {
    lexicon: 1,
    id: 'app.bsky.embed.record',
    description:
      'A representation of a record embedded in a Bluesky record (eg, a post). For example, a quote-post, or sharing a feed generator record.',
    defs: {
      main: {
        type: 'object',
        required: ['record'],
        properties: {
          record: {
            type: 'ref',
            ref: 'lex:com.atproto.repo.strongRef',
          },
        },
      },
      view: {
        type: 'object',
        required: ['record'],
        properties: {
          record: {
            type: 'union',
            refs: [
              'lex:app.bsky.embed.record#viewRecord',
              'lex:app.bsky.embed.record#viewNotFound',
              'lex:app.bsky.embed.record#viewBlocked',
              'lex:app.bsky.embed.record#viewDetached',
              'lex:app.bsky.feed.defs#generatorView',
              'lex:app.bsky.graph.defs#listView',
              'lex:app.bsky.labeler.defs#labelerView',
              'lex:app.bsky.graph.defs#starterPackViewBasic',
            ],
          },
        },
      },
      viewRecord: {
        type: 'object',
        required: ['uri', 'cid', 'author', 'value', 'indexedAt'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          author: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileViewBasic',
          },
          value: {
            type: 'unknown',
            description: 'The record data itself.',
          },
          labels: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#label',
            },
          },
          replyCount: {
            type: 'integer',
          },
          repostCount: {
            type: 'integer',
          },
          likeCount: {
            type: 'integer',
          },
          quoteCount: {
            type: 'integer',
          },
          embeds: {
            type: 'array',
            items: {
              type: 'union',
              refs: [
                'lex:app.bsky.embed.images#view',
                'lex:app.bsky.embed.video#view',
                'lex:app.bsky.embed.external#view',
                'lex:app.bsky.embed.record#view',
                'lex:app.bsky.embed.recordWithMedia#view',
              ],
            },
          },
          indexedAt: {
            type: 'string',
            format: 'datetime',
          },
        },
      },
      viewNotFound: {
        type: 'object',
        required: ['uri', 'notFound'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          notFound: {
            type: 'boolean',
            const: true,
          },
        },
      },
      viewBlocked: {
        type: 'object',
        required: ['uri', 'blocked', 'author'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          blocked: {
            type: 'boolean',
            const: true,
          },
          author: {
            type: 'ref',
            ref: 'lex:app.bsky.feed.defs#blockedAuthor',
          },
        },
      },
      viewDetached: {
        type: 'object',
        required: ['uri', 'detached'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          detached: {
            type: 'boolean',
            const: true,
          },
        },
      },
    },
  },
  AppBskyEmbedRecordWithMedia: {
    lexicon: 1,
    id: 'app.bsky.embed.recordWithMedia',
    description:
      'A representation of a record embedded in a Bluesky record (eg, a post), alongside other compatible embeds. For example, a quote post and image, or a quote post and external URL card.',
    defs: {
      main: {
        type: 'object',
        required: ['record', 'media'],
        properties: {
          record: {
            type: 'ref',
            ref: 'lex:app.bsky.embed.record',
          },
          media: {
            type: 'union',
            refs: [
              'lex:app.bsky.embed.images',
              'lex:app.bsky.embed.video',
              'lex:app.bsky.embed.external',
            ],
          },
        },
      },
      view: {
        type: 'object',
        required: ['record', 'media'],
        properties: {
          record: {
            type: 'ref',
            ref: 'lex:app.bsky.embed.record#view',
          },
          media: {
            type: 'union',
            refs: [
              'lex:app.bsky.embed.images#view',
              'lex:app.bsky.embed.video#view',
              'lex:app.bsky.embed.external#view',
            ],
          },
        },
      },
    },
  },
  AppBskyEmbedVideo: {
    lexicon: 1,
    id: 'app.bsky.embed.video',
    description: 'A video embedded in a Bluesky record (eg, a post).',
    defs: {
      main: {
        type: 'object',
        required: ['video'],
        properties: {
          video: {
            type: 'blob',
            accept: ['video/mp4'],
            maxSize: 50000000,
          },
          captions: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.embed.video#caption',
            },
            maxLength: 20,
          },
          alt: {
            type: 'string',
            description:
              'Alt text description of the video, for accessibility.',
            maxGraphemes: 1000,
            maxLength: 10000,
          },
          aspectRatio: {
            type: 'ref',
            ref: 'lex:app.bsky.embed.defs#aspectRatio',
          },
        },
      },
      caption: {
        type: 'object',
        required: ['lang', 'file'],
        properties: {
          lang: {
            type: 'string',
            format: 'language',
          },
          file: {
            type: 'blob',
            accept: ['text/vtt'],
            maxSize: 20000,
          },
        },
      },
      view: {
        type: 'object',
        required: ['cid', 'playlist'],
        properties: {
          cid: {
            type: 'string',
            format: 'cid',
          },
          playlist: {
            type: 'string',
            format: 'uri',
          },
          thumbnail: {
            type: 'string',
            format: 'uri',
          },
          alt: {
            type: 'string',
            maxGraphemes: 1000,
            maxLength: 10000,
          },
          aspectRatio: {
            type: 'ref',
            ref: 'lex:app.bsky.embed.defs#aspectRatio',
          },
        },
      },
    },
  },
  AppBskyFeedDefs: {
    lexicon: 1,
    id: 'app.bsky.feed.defs',
    defs: {
      postView: {
        type: 'object',
        required: ['uri', 'cid', 'author', 'record', 'indexedAt'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          author: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileViewBasic',
          },
          record: {
            type: 'unknown',
          },
          embed: {
            type: 'union',
            refs: [
              'lex:app.bsky.embed.images#view',
              'lex:app.bsky.embed.video#view',
              'lex:app.bsky.embed.external#view',
              'lex:app.bsky.embed.record#view',
              'lex:app.bsky.embed.recordWithMedia#view',
            ],
          },
          replyCount: {
            type: 'integer',
          },
          repostCount: {
            type: 'integer',
          },
          likeCount: {
            type: 'integer',
          },
          quoteCount: {
            type: 'integer',
          },
          indexedAt: {
            type: 'string',
            format: 'datetime',
          },
          viewer: {
            type: 'ref',
            ref: 'lex:app.bsky.feed.defs#viewerState',
          },
          labels: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#label',
            },
          },
          threadgate: {
            type: 'ref',
            ref: 'lex:app.bsky.feed.defs#threadgateView',
          },
        },
      },
      viewerState: {
        type: 'object',
        description:
          "Metadata about the requesting account's relationship with the subject content. Only has meaningful content for authed requests.",
        properties: {
          repost: {
            type: 'string',
            format: 'at-uri',
          },
          like: {
            type: 'string',
            format: 'at-uri',
          },
          threadMuted: {
            type: 'boolean',
          },
          replyDisabled: {
            type: 'boolean',
          },
          embeddingDisabled: {
            type: 'boolean',
          },
        },
      },
      feedViewPost: {
        type: 'object',
        required: ['post'],
        properties: {
          post: {
            type: 'ref',
            ref: 'lex:app.bsky.feed.defs#postView',
          },
          reply: {
            type: 'ref',
            ref: 'lex:app.bsky.feed.defs#replyRef',
          },
          reason: {
            type: 'union',
            refs: ['lex:app.bsky.feed.defs#reasonRepost'],
          },
          feedContext: {
            type: 'string',
            description:
              'Context provided by feed generator that may be passed back alongside interactions.',
            maxLength: 2000,
          },
        },
      },
      replyRef: {
        type: 'object',
        required: ['root', 'parent'],
        properties: {
          root: {
            type: 'union',
            refs: [
              'lex:app.bsky.feed.defs#postView',
              'lex:app.bsky.feed.defs#notFoundPost',
              'lex:app.bsky.feed.defs#blockedPost',
            ],
          },
          parent: {
            type: 'union',
            refs: [
              'lex:app.bsky.feed.defs#postView',
              'lex:app.bsky.feed.defs#notFoundPost',
              'lex:app.bsky.feed.defs#blockedPost',
            ],
          },
          grandparentAuthor: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileViewBasic',
            description:
              'When parent is a reply to another post, this is the author of that post.',
          },
        },
      },
      reasonRepost: {
        type: 'object',
        required: ['by', 'indexedAt'],
        properties: {
          by: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileViewBasic',
          },
          indexedAt: {
            type: 'string',
            format: 'datetime',
          },
        },
      },
      threadViewPost: {
        type: 'object',
        required: ['post'],
        properties: {
          post: {
            type: 'ref',
            ref: 'lex:app.bsky.feed.defs#postView',
          },
          parent: {
            type: 'union',
            refs: [
              'lex:app.bsky.feed.defs#threadViewPost',
              'lex:app.bsky.feed.defs#notFoundPost',
              'lex:app.bsky.feed.defs#blockedPost',
            ],
          },
          replies: {
            type: 'array',
            items: {
              type: 'union',
              refs: [
                'lex:app.bsky.feed.defs#threadViewPost',
                'lex:app.bsky.feed.defs#notFoundPost',
                'lex:app.bsky.feed.defs#blockedPost',
              ],
            },
          },
        },
      },
      notFoundPost: {
        type: 'object',
        required: ['uri', 'notFound'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          notFound: {
            type: 'boolean',
            const: true,
          },
        },
      },
      blockedPost: {
        type: 'object',
        required: ['uri', 'blocked', 'author'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          blocked: {
            type: 'boolean',
            const: true,
          },
          author: {
            type: 'ref',
            ref: 'lex:app.bsky.feed.defs#blockedAuthor',
          },
        },
      },
      blockedAuthor: {
        type: 'object',
        required: ['did'],
        properties: {
          did: {
            type: 'string',
            format: 'did',
          },
          viewer: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#viewerState',
          },
        },
      },
      generatorView: {
        type: 'object',
        required: ['uri', 'cid', 'did', 'creator', 'displayName', 'indexedAt'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          did: {
            type: 'string',
            format: 'did',
          },
          creator: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileView',
          },
          displayName: {
            type: 'string',
          },
          description: {
            type: 'string',
            maxGraphemes: 300,
            maxLength: 3000,
          },
          descriptionFacets: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.richtext.facet',
            },
          },
          avatar: {
            type: 'string',
            format: 'uri',
          },
          likeCount: {
            type: 'integer',
            minimum: 0,
          },
          acceptsInteractions: {
            type: 'boolean',
          },
          labels: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#label',
            },
          },
          viewer: {
            type: 'ref',
            ref: 'lex:app.bsky.feed.defs#generatorViewerState',
          },
          indexedAt: {
            type: 'string',
            format: 'datetime',
          },
        },
      },
      generatorViewerState: {
        type: 'object',
        properties: {
          like: {
            type: 'string',
            format: 'at-uri',
          },
        },
      },
      skeletonFeedPost: {
        type: 'object',
        required: ['post'],
        properties: {
          post: {
            type: 'string',
            format: 'at-uri',
          },
          reason: {
            type: 'union',
            refs: ['lex:app.bsky.feed.defs#skeletonReasonRepost'],
          },
          feedContext: {
            type: 'string',
            description:
              'Context that will be passed through to client and may be passed to feed generator back alongside interactions.',
            maxLength: 2000,
          },
        },
      },
      skeletonReasonRepost: {
        type: 'object',
        required: ['repost'],
        properties: {
          repost: {
            type: 'string',
            format: 'at-uri',
          },
        },
      },
      threadgateView: {
        type: 'object',
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          record: {
            type: 'unknown',
          },
          lists: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.graph.defs#listViewBasic',
            },
          },
        },
      },
      interaction: {
        type: 'object',
        properties: {
          item: {
            type: 'string',
            format: 'at-uri',
          },
          event: {
            type: 'string',
            knownValues: [
              'app.bsky.feed.defs#requestLess',
              'app.bsky.feed.defs#requestMore',
              'app.bsky.feed.defs#clickthroughItem',
              'app.bsky.feed.defs#clickthroughAuthor',
              'app.bsky.feed.defs#clickthroughReposter',
              'app.bsky.feed.defs#clickthroughEmbed',
              'app.bsky.feed.defs#interactionSeen',
              'app.bsky.feed.defs#interactionLike',
              'app.bsky.feed.defs#interactionRepost',
              'app.bsky.feed.defs#interactionReply',
              'app.bsky.feed.defs#interactionQuote',
              'app.bsky.feed.defs#interactionShare',
            ],
          },
          feedContext: {
            type: 'string',
            description:
              'Context on a feed item that was originally supplied by the feed generator on getFeedSkeleton.',
            maxLength: 2000,
          },
        },
      },
      requestLess: {
        type: 'token',
        description:
          'Request that less content like the given feed item be shown in the feed',
      },
      requestMore: {
        type: 'token',
        description:
          'Request that more content like the given feed item be shown in the feed',
      },
      clickthroughItem: {
        type: 'token',
        description: 'User clicked through to the feed item',
      },
      clickthroughAuthor: {
        type: 'token',
        description: 'User clicked through to the author of the feed item',
      },
      clickthroughReposter: {
        type: 'token',
        description: 'User clicked through to the reposter of the feed item',
      },
      clickthroughEmbed: {
        type: 'token',
        description:
          'User clicked through to the embedded content of the feed item',
      },
      interactionSeen: {
        type: 'token',
        description: 'Feed item was seen by user',
      },
      interactionLike: {
        type: 'token',
        description: 'User liked the feed item',
      },
      interactionRepost: {
        type: 'token',
        description: 'User reposted the feed item',
      },
      interactionReply: {
        type: 'token',
        description: 'User replied to the feed item',
      },
      interactionQuote: {
        type: 'token',
        description: 'User quoted the feed item',
      },
      interactionShare: {
        type: 'token',
        description: 'User shared the feed item',
      },
    },
  },
  AppBskyFeedDescribeFeedGenerator: {
    lexicon: 1,
    id: 'app.bsky.feed.describeFeedGenerator',
    defs: {
      main: {
        type: 'query',
        description:
          'Get information about a feed generator, including policies and offered feed URIs. Does not require auth; implemented by Feed Generator services (not App View).',
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['did', 'feeds'],
            properties: {
              did: {
                type: 'string',
                format: 'did',
              },
              feeds: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:app.bsky.feed.describeFeedGenerator#feed',
                },
              },
              links: {
                type: 'ref',
                ref: 'lex:app.bsky.feed.describeFeedGenerator#links',
              },
            },
          },
        },
      },
      feed: {
        type: 'object',
        required: ['uri'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
        },
      },
      links: {
        type: 'object',
        properties: {
          privacyPolicy: {
            type: 'string',
          },
          termsOfService: {
            type: 'string',
          },
        },
      },
    },
  },
  AppBskyFeedGenerator: {
    lexicon: 1,
    id: 'app.bsky.feed.generator',
    defs: {
      main: {
        type: 'record',
        description:
          'Record declaring of the existence of a feed generator, and containing metadata about it. The record can exist in any repository.',
        key: 'any',
        record: {
          type: 'object',
          required: ['did', 'displayName', 'createdAt'],
          properties: {
            did: {
              type: 'string',
              format: 'did',
            },
            displayName: {
              type: 'string',
              maxGraphemes: 24,
              maxLength: 240,
            },
            description: {
              type: 'string',
              maxGraphemes: 300,
              maxLength: 3000,
            },
            descriptionFacets: {
              type: 'array',
              items: {
                type: 'ref',
                ref: 'lex:app.bsky.richtext.facet',
              },
            },
            avatar: {
              type: 'blob',
              accept: ['image/png', 'image/jpeg'],
              maxSize: 1000000,
            },
            acceptsInteractions: {
              type: 'boolean',
              description:
                'Declaration that a feed accepts feedback interactions from a client through app.bsky.feed.sendInteractions',
            },
            labels: {
              type: 'union',
              description: 'Self-label values',
              refs: ['lex:com.atproto.label.defs#selfLabels'],
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  AppBskyFeedGetFeedSkeleton: {
    lexicon: 1,
    id: 'app.bsky.feed.getFeedSkeleton',
    defs: {
      main: {
        type: 'query',
        description:
          'Get a skeleton of a feed provided by a feed generator. Auth is optional, depending on provider requirements, and provides the DID of the requester. Implemented by Feed Generator Service.',
        parameters: {
          type: 'params',
          required: ['feed'],
          properties: {
            feed: {
              type: 'string',
              format: 'at-uri',
              description:
                'Reference to feed generator record describing the specific feed being requested.',
            },
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 50,
            },
            cursor: {
              type: 'string',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['feed'],
            properties: {
              cursor: {
                type: 'string',
              },
              feed: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:app.bsky.feed.defs#skeletonFeedPost',
                },
              },
            },
          },
        },
        errors: [
          {
            name: 'UnknownFeed',
          },
        ],
      },
    },
  },
  AppBskyFeedLike: {
    lexicon: 1,
    id: 'app.bsky.feed.like',
    defs: {
      main: {
        type: 'record',
        description: "Record declaring a 'like' of a piece of subject content.",
        key: 'tid',
        record: {
          type: 'object',
          required: ['subject', 'createdAt'],
          properties: {
            subject: {
              type: 'ref',
              ref: 'lex:com.atproto.repo.strongRef',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  AppBskyFeedPost: {
    lexicon: 1,
    id: 'app.bsky.feed.post',
    defs: {
      main: {
        type: 'record',
        description: 'Record containing a Bluesky post.',
        key: 'tid',
        record: {
          type: 'object',
          required: ['text', 'createdAt'],
          properties: {
            text: {
              type: 'string',
              maxLength: 3000,
              maxGraphemes: 300,
              description:
                'The primary post content. May be an empty string, if there are embeds.',
            },
            entities: {
              type: 'array',
              description: 'DEPRECATED: replaced by app.bsky.richtext.facet.',
              items: {
                type: 'ref',
                ref: 'lex:app.bsky.feed.post#entity',
              },
            },
            facets: {
              type: 'array',
              description:
                'Annotations of text (mentions, URLs, hashtags, etc)',
              items: {
                type: 'ref',
                ref: 'lex:app.bsky.richtext.facet',
              },
            },
            reply: {
              type: 'ref',
              ref: 'lex:app.bsky.feed.post#replyRef',
            },
            embed: {
              type: 'union',
              refs: [
                'lex:app.bsky.embed.images',
                'lex:app.bsky.embed.video',
                'lex:app.bsky.embed.external',
                'lex:app.bsky.embed.record',
                'lex:app.bsky.embed.recordWithMedia',
              ],
            },
            langs: {
              type: 'array',
              description:
                'Indicates human language of post primary text content.',
              maxLength: 3,
              items: {
                type: 'string',
                format: 'language',
              },
            },
            labels: {
              type: 'union',
              description:
                'Self-label values for this post. Effectively content warnings.',
              refs: ['lex:com.atproto.label.defs#selfLabels'],
            },
            tags: {
              type: 'array',
              description:
                'Additional hashtags, in addition to any included in post text and facets.',
              maxLength: 8,
              items: {
                type: 'string',
                maxLength: 640,
                maxGraphemes: 64,
              },
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
              description:
                'Client-declared timestamp when this post was originally created.',
            },
          },
        },
      },
      replyRef: {
        type: 'object',
        required: ['root', 'parent'],
        properties: {
          root: {
            type: 'ref',
            ref: 'lex:com.atproto.repo.strongRef',
          },
          parent: {
            type: 'ref',
            ref: 'lex:com.atproto.repo.strongRef',
          },
        },
      },
      entity: {
        type: 'object',
        description: 'Deprecated: use facets instead.',
        required: ['index', 'type', 'value'],
        properties: {
          index: {
            type: 'ref',
            ref: 'lex:app.bsky.feed.post#textSlice',
          },
          type: {
            type: 'string',
            description: "Expected values are 'mention' and 'link'.",
          },
          value: {
            type: 'string',
          },
        },
      },
      textSlice: {
        type: 'object',
        description:
          'Deprecated. Use app.bsky.richtext instead -- A text segment. Start is inclusive, end is exclusive. Indices are for utf16-encoded strings.',
        required: ['start', 'end'],
        properties: {
          start: {
            type: 'integer',
            minimum: 0,
          },
          end: {
            type: 'integer',
            minimum: 0,
          },
        },
      },
    },
  },
  AppBskyFeedRepost: {
    lexicon: 1,
    id: 'app.bsky.feed.repost',
    defs: {
      main: {
        description:
          "Record representing a 'repost' of an existing Bluesky post.",
        type: 'record',
        key: 'tid',
        record: {
          type: 'object',
          required: ['subject', 'createdAt'],
          properties: {
            subject: {
              type: 'ref',
              ref: 'lex:com.atproto.repo.strongRef',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  AppBskyFeedSendInteractions: {
    lexicon: 1,
    id: 'app.bsky.feed.sendInteractions',
    defs: {
      main: {
        type: 'procedure',
        description:
          'Send information about interactions with feed items back to the feed generator that served them.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['interactions'],
            properties: {
              interactions: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:app.bsky.feed.defs#interaction',
                },
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {},
          },
        },
      },
    },
  },
  AppBskyGraphDefs: {
    lexicon: 1,
    id: 'app.bsky.graph.defs',
    defs: {
      listViewBasic: {
        type: 'object',
        required: ['uri', 'cid', 'name', 'purpose'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          name: {
            type: 'string',
            maxLength: 64,
            minLength: 1,
          },
          purpose: {
            type: 'ref',
            ref: 'lex:app.bsky.graph.defs#listPurpose',
          },
          avatar: {
            type: 'string',
            format: 'uri',
          },
          listItemCount: {
            type: 'integer',
            minimum: 0,
          },
          labels: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#label',
            },
          },
          viewer: {
            type: 'ref',
            ref: 'lex:app.bsky.graph.defs#listViewerState',
          },
          indexedAt: {
            type: 'string',
            format: 'datetime',
          },
        },
      },
      listView: {
        type: 'object',
        required: ['uri', 'cid', 'creator', 'name', 'purpose', 'indexedAt'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          creator: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileView',
          },
          name: {
            type: 'string',
            maxLength: 64,
            minLength: 1,
          },
          purpose: {
            type: 'ref',
            ref: 'lex:app.bsky.graph.defs#listPurpose',
          },
          description: {
            type: 'string',
            maxGraphemes: 300,
            maxLength: 3000,
          },
          descriptionFacets: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.richtext.facet',
            },
          },
          avatar: {
            type: 'string',
            format: 'uri',
          },
          listItemCount: {
            type: 'integer',
            minimum: 0,
          },
          labels: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#label',
            },
          },
          viewer: {
            type: 'ref',
            ref: 'lex:app.bsky.graph.defs#listViewerState',
          },
          indexedAt: {
            type: 'string',
            format: 'datetime',
          },
        },
      },
      listItemView: {
        type: 'object',
        required: ['uri', 'subject'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          subject: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileView',
          },
        },
      },
      starterPackView: {
        type: 'object',
        required: ['uri', 'cid', 'record', 'creator', 'indexedAt'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          record: {
            type: 'unknown',
          },
          creator: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileViewBasic',
          },
          list: {
            type: 'ref',
            ref: 'lex:app.bsky.graph.defs#listViewBasic',
          },
          listItemsSample: {
            type: 'array',
            maxLength: 12,
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.graph.defs#listItemView',
            },
          },
          feeds: {
            type: 'array',
            maxLength: 3,
            items: {
              type: 'ref',
              ref: 'lex:app.bsky.feed.defs#generatorView',
            },
          },
          joinedWeekCount: {
            type: 'integer',
            minimum: 0,
          },
          joinedAllTimeCount: {
            type: 'integer',
            minimum: 0,
          },
          labels: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#label',
            },
          },
          indexedAt: {
            type: 'string',
            format: 'datetime',
          },
        },
      },
      starterPackViewBasic: {
        type: 'object',
        required: ['uri', 'cid', 'record', 'creator', 'indexedAt'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          record: {
            type: 'unknown',
          },
          creator: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileViewBasic',
          },
          listItemCount: {
            type: 'integer',
            minimum: 0,
          },
          joinedWeekCount: {
            type: 'integer',
            minimum: 0,
          },
          joinedAllTimeCount: {
            type: 'integer',
            minimum: 0,
          },
          labels: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#label',
            },
          },
          indexedAt: {
            type: 'string',
            format: 'datetime',
          },
        },
      },
      listPurpose: {
        type: 'string',
        knownValues: [
          'app.bsky.graph.defs#modlist',
          'app.bsky.graph.defs#curatelist',
          'app.bsky.graph.defs#referencelist',
        ],
      },
      modlist: {
        type: 'token',
        description:
          'A list of actors to apply an aggregate moderation action (mute/block) on.',
      },
      curatelist: {
        type: 'token',
        description:
          'A list of actors used for curation purposes such as list feeds or interaction gating.',
      },
      referencelist: {
        type: 'token',
        description:
          'A list of actors used for only for reference purposes such as within a starter pack.',
      },
      listViewerState: {
        type: 'object',
        properties: {
          muted: {
            type: 'boolean',
          },
          blocked: {
            type: 'string',
            format: 'at-uri',
          },
        },
      },
      notFoundActor: {
        type: 'object',
        description: 'indicates that a handle or DID could not be resolved',
        required: ['actor', 'notFound'],
        properties: {
          actor: {
            type: 'string',
            format: 'at-identifier',
          },
          notFound: {
            type: 'boolean',
            const: true,
          },
        },
      },
      relationship: {
        type: 'object',
        description:
          'lists the bi-directional graph relationships between one actor (not indicated in the object), and the target actors (the DID included in the object)',
        required: ['did'],
        properties: {
          did: {
            type: 'string',
            format: 'did',
          },
          following: {
            type: 'string',
            format: 'at-uri',
            description:
              'if the actor follows this DID, this is the AT-URI of the follow record',
          },
          followedBy: {
            type: 'string',
            format: 'at-uri',
            description:
              'if the actor is followed by this DID, contains the AT-URI of the follow record',
          },
        },
      },
    },
  },
  AppBskyGraphFollow: {
    lexicon: 1,
    id: 'app.bsky.graph.follow',
    defs: {
      main: {
        type: 'record',
        description:
          "Record declaring a social 'follow' relationship of another account. Duplicate follows will be ignored by the AppView.",
        key: 'tid',
        record: {
          type: 'object',
          required: ['subject', 'createdAt'],
          properties: {
            subject: {
              type: 'string',
              format: 'did',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  AppBskyGraphList: {
    lexicon: 1,
    id: 'app.bsky.graph.list',
    defs: {
      main: {
        type: 'record',
        description:
          'Record representing a list of accounts (actors). Scope includes both moderation-oriented lists and curration-oriented lists.',
        key: 'tid',
        record: {
          type: 'object',
          required: ['name', 'purpose', 'createdAt'],
          properties: {
            purpose: {
              type: 'ref',
              description:
                'Defines the purpose of the list (aka, moderation-oriented or curration-oriented)',
              ref: 'lex:app.bsky.graph.defs#listPurpose',
            },
            name: {
              type: 'string',
              maxLength: 64,
              minLength: 1,
              description: 'Display name for list; can not be empty.',
            },
            description: {
              type: 'string',
              maxGraphemes: 300,
              maxLength: 3000,
            },
            descriptionFacets: {
              type: 'array',
              items: {
                type: 'ref',
                ref: 'lex:app.bsky.richtext.facet',
              },
            },
            avatar: {
              type: 'blob',
              accept: ['image/png', 'image/jpeg'],
              maxSize: 1000000,
            },
            labels: {
              type: 'union',
              refs: ['lex:com.atproto.label.defs#selfLabels'],
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  AppBskyGraphListitem: {
    lexicon: 1,
    id: 'app.bsky.graph.listitem',
    defs: {
      main: {
        type: 'record',
        description:
          "Record representing an account's inclusion on a specific list. The AppView will ignore duplicate listitem records.",
        key: 'tid',
        record: {
          type: 'object',
          required: ['subject', 'list', 'createdAt'],
          properties: {
            subject: {
              type: 'string',
              format: 'did',
              description: 'The account which is included on the list.',
            },
            list: {
              type: 'string',
              format: 'at-uri',
              description:
                'Reference (AT-URI) to the list record (app.bsky.graph.list).',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  AppBskyLabelerDefs: {
    lexicon: 1,
    id: 'app.bsky.labeler.defs',
    defs: {
      labelerView: {
        type: 'object',
        required: ['uri', 'cid', 'creator', 'indexedAt'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          creator: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileView',
          },
          likeCount: {
            type: 'integer',
            minimum: 0,
          },
          viewer: {
            type: 'ref',
            ref: 'lex:app.bsky.labeler.defs#labelerViewerState',
          },
          indexedAt: {
            type: 'string',
            format: 'datetime',
          },
          labels: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#label',
            },
          },
        },
      },
      labelerViewDetailed: {
        type: 'object',
        required: ['uri', 'cid', 'creator', 'policies', 'indexedAt'],
        properties: {
          uri: {
            type: 'string',
            format: 'at-uri',
          },
          cid: {
            type: 'string',
            format: 'cid',
          },
          creator: {
            type: 'ref',
            ref: 'lex:app.bsky.actor.defs#profileView',
          },
          policies: {
            type: 'ref',
            ref: 'lex:app.bsky.labeler.defs#labelerPolicies',
          },
          likeCount: {
            type: 'integer',
            minimum: 0,
          },
          viewer: {
            type: 'ref',
            ref: 'lex:app.bsky.labeler.defs#labelerViewerState',
          },
          indexedAt: {
            type: 'string',
            format: 'datetime',
          },
          labels: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#label',
            },
          },
        },
      },
      labelerViewerState: {
        type: 'object',
        properties: {
          like: {
            type: 'string',
            format: 'at-uri',
          },
        },
      },
      labelerPolicies: {
        type: 'object',
        required: ['labelValues'],
        properties: {
          labelValues: {
            type: 'array',
            description:
              'The label values which this labeler publishes. May include global or custom labels.',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#labelValue',
            },
          },
          labelValueDefinitions: {
            type: 'array',
            description:
              'Label values created by this labeler and scoped exclusively to it. Labels defined here will override global label definitions for this labeler.',
            items: {
              type: 'ref',
              ref: 'lex:com.atproto.label.defs#labelValueDefinition',
            },
          },
        },
      },
    },
  },
  AppBskyLabelerGetServices: {
    lexicon: 1,
    id: 'app.bsky.labeler.getServices',
    defs: {
      main: {
        type: 'query',
        description: 'Get information about a list of labeler services.',
        parameters: {
          type: 'params',
          required: ['dids'],
          properties: {
            dids: {
              type: 'array',
              items: {
                type: 'string',
                format: 'did',
              },
            },
            detailed: {
              type: 'boolean',
              default: false,
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['views'],
            properties: {
              views: {
                type: 'array',
                items: {
                  type: 'union',
                  refs: [
                    'lex:app.bsky.labeler.defs#labelerView',
                    'lex:app.bsky.labeler.defs#labelerViewDetailed',
                  ],
                },
              },
            },
          },
        },
      },
    },
  },
  AppBskyLabelerService: {
    lexicon: 1,
    id: 'app.bsky.labeler.service',
    defs: {
      main: {
        type: 'record',
        description: 'A declaration of the existence of labeler service.',
        key: 'literal:self',
        record: {
          type: 'object',
          required: ['policies', 'createdAt'],
          properties: {
            policies: {
              type: 'ref',
              ref: 'lex:app.bsky.labeler.defs#labelerPolicies',
            },
            labels: {
              type: 'union',
              refs: ['lex:com.atproto.label.defs#selfLabels'],
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  AppBskyRichtextFacet: {
    lexicon: 1,
    id: 'app.bsky.richtext.facet',
    defs: {
      main: {
        type: 'object',
        description: 'Annotation of a sub-string within rich text.',
        required: ['index', 'features'],
        properties: {
          index: {
            type: 'ref',
            ref: 'lex:app.bsky.richtext.facet#byteSlice',
          },
          features: {
            type: 'array',
            items: {
              type: 'union',
              refs: [
                'lex:app.bsky.richtext.facet#mention',
                'lex:app.bsky.richtext.facet#link',
                'lex:app.bsky.richtext.facet#tag',
              ],
            },
          },
        },
      },
      mention: {
        type: 'object',
        description:
          "Facet feature for mention of another account. The text is usually a handle, including a '@' prefix, but the facet reference is a DID.",
        required: ['did'],
        properties: {
          did: {
            type: 'string',
            format: 'did',
          },
        },
      },
      link: {
        type: 'object',
        description:
          'Facet feature for a URL. The text URL may have been simplified or truncated, but the facet reference should be a complete URL.',
        required: ['uri'],
        properties: {
          uri: {
            type: 'string',
            format: 'uri',
          },
        },
      },
      tag: {
        type: 'object',
        description:
          "Facet feature for a hashtag. The text usually includes a '#' prefix, but the facet reference should not (except in the case of 'double hash tags').",
        required: ['tag'],
        properties: {
          tag: {
            type: 'string',
            maxLength: 640,
            maxGraphemes: 64,
          },
        },
      },
      byteSlice: {
        type: 'object',
        description:
          'Specifies the sub-string range a facet feature applies to. Start index is inclusive, end index is exclusive. Indices are zero-indexed, counting bytes of the UTF-8 encoded text. NOTE: some languages, like Javascript, use UTF-16 or Unicode codepoints for string slice indexing; in these languages, convert to byte arrays before working with facets.',
        required: ['byteStart', 'byteEnd'],
        properties: {
          byteStart: {
            type: 'integer',
            minimum: 0,
          },
          byteEnd: {
            type: 'integer',
            minimum: 0,
          },
        },
      },
    },
  },
  ClubFeeedGenerator: {
    lexicon: 1,
    id: 'club.feeed.generator',
    defs: {
      main: {
        type: 'object',
        required: [],
        properties: {
          actors: {
            type: 'array',
            items: {
              type: 'string',
              format: 'did',
            },
          },
          handleSuffixes: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          tags: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  ClubFeeedSubmission: {
    lexicon: 1,
    id: 'club.feeed.submission',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        record: {
          type: 'object',
          required: ['feed', 'post'],
          properties: {
            feed: {
              type: 'string',
              format: 'at-uri',
            },
            post: {
              type: 'string',
              format: 'at-uri',
            },
          },
        },
      },
    },
  },
}
export const schemas: LexiconDoc[] = Object.values(schemaDict) as LexiconDoc[]
export const lexicons: Lexicons = new Lexicons(schemas)
export const ids = {
  ComAtprotoAdminDefs: 'com.atproto.admin.defs',
  ComAtprotoAdminDeleteAccount: 'com.atproto.admin.deleteAccount',
  ComAtprotoAdminDisableAccountInvites:
    'com.atproto.admin.disableAccountInvites',
  ComAtprotoAdminDisableInviteCodes: 'com.atproto.admin.disableInviteCodes',
  ComAtprotoAdminEnableAccountInvites: 'com.atproto.admin.enableAccountInvites',
  ComAtprotoAdminGetAccountInfo: 'com.atproto.admin.getAccountInfo',
  ComAtprotoAdminGetAccountInfos: 'com.atproto.admin.getAccountInfos',
  ComAtprotoAdminGetInviteCodes: 'com.atproto.admin.getInviteCodes',
  ComAtprotoAdminGetSubjectStatus: 'com.atproto.admin.getSubjectStatus',
  ComAtprotoAdminSearchAccounts: 'com.atproto.admin.searchAccounts',
  ComAtprotoAdminSendEmail: 'com.atproto.admin.sendEmail',
  ComAtprotoAdminUpdateAccountEmail: 'com.atproto.admin.updateAccountEmail',
  ComAtprotoAdminUpdateAccountHandle: 'com.atproto.admin.updateAccountHandle',
  ComAtprotoAdminUpdateAccountPassword:
    'com.atproto.admin.updateAccountPassword',
  ComAtprotoAdminUpdateSubjectStatus: 'com.atproto.admin.updateSubjectStatus',
  ComAtprotoIdentityGetRecommendedDidCredentials:
    'com.atproto.identity.getRecommendedDidCredentials',
  ComAtprotoIdentityRequestPlcOperationSignature:
    'com.atproto.identity.requestPlcOperationSignature',
  ComAtprotoIdentityResolveHandle: 'com.atproto.identity.resolveHandle',
  ComAtprotoIdentitySignPlcOperation: 'com.atproto.identity.signPlcOperation',
  ComAtprotoIdentitySubmitPlcOperation:
    'com.atproto.identity.submitPlcOperation',
  ComAtprotoIdentityUpdateHandle: 'com.atproto.identity.updateHandle',
  ComAtprotoLabelDefs: 'com.atproto.label.defs',
  ComAtprotoLabelQueryLabels: 'com.atproto.label.queryLabels',
  ComAtprotoLabelSubscribeLabels: 'com.atproto.label.subscribeLabels',
  ComAtprotoModerationCreateReport: 'com.atproto.moderation.createReport',
  ComAtprotoModerationDefs: 'com.atproto.moderation.defs',
  ComAtprotoRepoApplyWrites: 'com.atproto.repo.applyWrites',
  ComAtprotoRepoCreateRecord: 'com.atproto.repo.createRecord',
  ComAtprotoRepoDefs: 'com.atproto.repo.defs',
  ComAtprotoRepoDeleteRecord: 'com.atproto.repo.deleteRecord',
  ComAtprotoRepoDescribeRepo: 'com.atproto.repo.describeRepo',
  ComAtprotoRepoGetRecord: 'com.atproto.repo.getRecord',
  ComAtprotoRepoImportRepo: 'com.atproto.repo.importRepo',
  ComAtprotoRepoListMissingBlobs: 'com.atproto.repo.listMissingBlobs',
  ComAtprotoRepoListRecords: 'com.atproto.repo.listRecords',
  ComAtprotoRepoPutRecord: 'com.atproto.repo.putRecord',
  ComAtprotoRepoStrongRef: 'com.atproto.repo.strongRef',
  ComAtprotoRepoUploadBlob: 'com.atproto.repo.uploadBlob',
  ComAtprotoServerActivateAccount: 'com.atproto.server.activateAccount',
  ComAtprotoServerCheckAccountStatus: 'com.atproto.server.checkAccountStatus',
  ComAtprotoServerConfirmEmail: 'com.atproto.server.confirmEmail',
  ComAtprotoServerCreateAccount: 'com.atproto.server.createAccount',
  ComAtprotoServerCreateAppPassword: 'com.atproto.server.createAppPassword',
  ComAtprotoServerCreateInviteCode: 'com.atproto.server.createInviteCode',
  ComAtprotoServerCreateInviteCodes: 'com.atproto.server.createInviteCodes',
  ComAtprotoServerCreateSession: 'com.atproto.server.createSession',
  ComAtprotoServerDeactivateAccount: 'com.atproto.server.deactivateAccount',
  ComAtprotoServerDefs: 'com.atproto.server.defs',
  ComAtprotoServerDeleteAccount: 'com.atproto.server.deleteAccount',
  ComAtprotoServerDeleteSession: 'com.atproto.server.deleteSession',
  ComAtprotoServerDescribeServer: 'com.atproto.server.describeServer',
  ComAtprotoServerGetAccountInviteCodes:
    'com.atproto.server.getAccountInviteCodes',
  ComAtprotoServerGetServiceAuth: 'com.atproto.server.getServiceAuth',
  ComAtprotoServerGetSession: 'com.atproto.server.getSession',
  ComAtprotoServerListAppPasswords: 'com.atproto.server.listAppPasswords',
  ComAtprotoServerRefreshSession: 'com.atproto.server.refreshSession',
  ComAtprotoServerRequestAccountDelete:
    'com.atproto.server.requestAccountDelete',
  ComAtprotoServerRequestEmailConfirmation:
    'com.atproto.server.requestEmailConfirmation',
  ComAtprotoServerRequestEmailUpdate: 'com.atproto.server.requestEmailUpdate',
  ComAtprotoServerRequestPasswordReset:
    'com.atproto.server.requestPasswordReset',
  ComAtprotoServerReserveSigningKey: 'com.atproto.server.reserveSigningKey',
  ComAtprotoServerResetPassword: 'com.atproto.server.resetPassword',
  ComAtprotoServerRevokeAppPassword: 'com.atproto.server.revokeAppPassword',
  ComAtprotoServerUpdateEmail: 'com.atproto.server.updateEmail',
  ComAtprotoSyncGetBlob: 'com.atproto.sync.getBlob',
  ComAtprotoSyncGetBlocks: 'com.atproto.sync.getBlocks',
  ComAtprotoSyncGetCheckout: 'com.atproto.sync.getCheckout',
  ComAtprotoSyncGetHead: 'com.atproto.sync.getHead',
  ComAtprotoSyncGetLatestCommit: 'com.atproto.sync.getLatestCommit',
  ComAtprotoSyncGetRecord: 'com.atproto.sync.getRecord',
  ComAtprotoSyncGetRepo: 'com.atproto.sync.getRepo',
  ComAtprotoSyncGetRepoStatus: 'com.atproto.sync.getRepoStatus',
  ComAtprotoSyncListBlobs: 'com.atproto.sync.listBlobs',
  ComAtprotoSyncListRepos: 'com.atproto.sync.listRepos',
  ComAtprotoSyncNotifyOfUpdate: 'com.atproto.sync.notifyOfUpdate',
  ComAtprotoSyncRequestCrawl: 'com.atproto.sync.requestCrawl',
  ComAtprotoSyncSubscribeRepos: 'com.atproto.sync.subscribeRepos',
  ComAtprotoTempCheckSignupQueue: 'com.atproto.temp.checkSignupQueue',
  ComAtprotoTempFetchLabels: 'com.atproto.temp.fetchLabels',
  ComAtprotoTempRequestPhoneVerification:
    'com.atproto.temp.requestPhoneVerification',
  AppBskyActorDefs: 'app.bsky.actor.defs',
  AppBskyActorProfile: 'app.bsky.actor.profile',
  AppBskyEmbedDefs: 'app.bsky.embed.defs',
  AppBskyEmbedExternal: 'app.bsky.embed.external',
  AppBskyEmbedImages: 'app.bsky.embed.images',
  AppBskyEmbedRecord: 'app.bsky.embed.record',
  AppBskyEmbedRecordWithMedia: 'app.bsky.embed.recordWithMedia',
  AppBskyEmbedVideo: 'app.bsky.embed.video',
  AppBskyFeedDefs: 'app.bsky.feed.defs',
  AppBskyFeedDescribeFeedGenerator: 'app.bsky.feed.describeFeedGenerator',
  AppBskyFeedGenerator: 'app.bsky.feed.generator',
  AppBskyFeedGetFeedSkeleton: 'app.bsky.feed.getFeedSkeleton',
  AppBskyFeedLike: 'app.bsky.feed.like',
  AppBskyFeedPost: 'app.bsky.feed.post',
  AppBskyFeedRepost: 'app.bsky.feed.repost',
  AppBskyFeedSendInteractions: 'app.bsky.feed.sendInteractions',
  AppBskyGraphDefs: 'app.bsky.graph.defs',
  AppBskyGraphFollow: 'app.bsky.graph.follow',
  AppBskyGraphList: 'app.bsky.graph.list',
  AppBskyGraphListitem: 'app.bsky.graph.listitem',
  AppBskyLabelerDefs: 'app.bsky.labeler.defs',
  AppBskyLabelerGetServices: 'app.bsky.labeler.getServices',
  AppBskyLabelerService: 'app.bsky.labeler.service',
  AppBskyRichtextFacet: 'app.bsky.richtext.facet',
  ClubFeeedGenerator: 'club.feeed.generator',
  ClubFeeedSubmission: 'club.feeed.submission',
}
