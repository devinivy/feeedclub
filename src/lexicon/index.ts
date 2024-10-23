/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  createServer as createXrpcServer,
  Server as XrpcServer,
  Options as XrpcOptions,
  AuthVerifier,
  StreamAuthVerifier,
} from '@atproto/xrpc-server'
import { schemas } from './lexicons'
import * as ComAtprotoAdminDeleteAccount from './types/com/atproto/admin/deleteAccount'
import * as ComAtprotoAdminDisableAccountInvites from './types/com/atproto/admin/disableAccountInvites'
import * as ComAtprotoAdminDisableInviteCodes from './types/com/atproto/admin/disableInviteCodes'
import * as ComAtprotoAdminEnableAccountInvites from './types/com/atproto/admin/enableAccountInvites'
import * as ComAtprotoAdminGetAccountInfo from './types/com/atproto/admin/getAccountInfo'
import * as ComAtprotoAdminGetAccountInfos from './types/com/atproto/admin/getAccountInfos'
import * as ComAtprotoAdminGetInviteCodes from './types/com/atproto/admin/getInviteCodes'
import * as ComAtprotoAdminGetSubjectStatus from './types/com/atproto/admin/getSubjectStatus'
import * as ComAtprotoAdminSearchAccounts from './types/com/atproto/admin/searchAccounts'
import * as ComAtprotoAdminSendEmail from './types/com/atproto/admin/sendEmail'
import * as ComAtprotoAdminUpdateAccountEmail from './types/com/atproto/admin/updateAccountEmail'
import * as ComAtprotoAdminUpdateAccountHandle from './types/com/atproto/admin/updateAccountHandle'
import * as ComAtprotoAdminUpdateAccountPassword from './types/com/atproto/admin/updateAccountPassword'
import * as ComAtprotoAdminUpdateSubjectStatus from './types/com/atproto/admin/updateSubjectStatus'
import * as ComAtprotoIdentityGetRecommendedDidCredentials from './types/com/atproto/identity/getRecommendedDidCredentials'
import * as ComAtprotoIdentityRequestPlcOperationSignature from './types/com/atproto/identity/requestPlcOperationSignature'
import * as ComAtprotoIdentityResolveHandle from './types/com/atproto/identity/resolveHandle'
import * as ComAtprotoIdentitySignPlcOperation from './types/com/atproto/identity/signPlcOperation'
import * as ComAtprotoIdentitySubmitPlcOperation from './types/com/atproto/identity/submitPlcOperation'
import * as ComAtprotoIdentityUpdateHandle from './types/com/atproto/identity/updateHandle'
import * as ComAtprotoLabelQueryLabels from './types/com/atproto/label/queryLabels'
import * as ComAtprotoLabelSubscribeLabels from './types/com/atproto/label/subscribeLabels'
import * as ComAtprotoModerationCreateReport from './types/com/atproto/moderation/createReport'
import * as ComAtprotoRepoApplyWrites from './types/com/atproto/repo/applyWrites'
import * as ComAtprotoRepoCreateRecord from './types/com/atproto/repo/createRecord'
import * as ComAtprotoRepoDeleteRecord from './types/com/atproto/repo/deleteRecord'
import * as ComAtprotoRepoDescribeRepo from './types/com/atproto/repo/describeRepo'
import * as ComAtprotoRepoGetRecord from './types/com/atproto/repo/getRecord'
import * as ComAtprotoRepoImportRepo from './types/com/atproto/repo/importRepo'
import * as ComAtprotoRepoListMissingBlobs from './types/com/atproto/repo/listMissingBlobs'
import * as ComAtprotoRepoListRecords from './types/com/atproto/repo/listRecords'
import * as ComAtprotoRepoPutRecord from './types/com/atproto/repo/putRecord'
import * as ComAtprotoRepoUploadBlob from './types/com/atproto/repo/uploadBlob'
import * as ComAtprotoServerActivateAccount from './types/com/atproto/server/activateAccount'
import * as ComAtprotoServerCheckAccountStatus from './types/com/atproto/server/checkAccountStatus'
import * as ComAtprotoServerConfirmEmail from './types/com/atproto/server/confirmEmail'
import * as ComAtprotoServerCreateAccount from './types/com/atproto/server/createAccount'
import * as ComAtprotoServerCreateAppPassword from './types/com/atproto/server/createAppPassword'
import * as ComAtprotoServerCreateInviteCode from './types/com/atproto/server/createInviteCode'
import * as ComAtprotoServerCreateInviteCodes from './types/com/atproto/server/createInviteCodes'
import * as ComAtprotoServerCreateSession from './types/com/atproto/server/createSession'
import * as ComAtprotoServerDeactivateAccount from './types/com/atproto/server/deactivateAccount'
import * as ComAtprotoServerDeleteAccount from './types/com/atproto/server/deleteAccount'
import * as ComAtprotoServerDeleteSession from './types/com/atproto/server/deleteSession'
import * as ComAtprotoServerDescribeServer from './types/com/atproto/server/describeServer'
import * as ComAtprotoServerGetAccountInviteCodes from './types/com/atproto/server/getAccountInviteCodes'
import * as ComAtprotoServerGetServiceAuth from './types/com/atproto/server/getServiceAuth'
import * as ComAtprotoServerGetSession from './types/com/atproto/server/getSession'
import * as ComAtprotoServerListAppPasswords from './types/com/atproto/server/listAppPasswords'
import * as ComAtprotoServerRefreshSession from './types/com/atproto/server/refreshSession'
import * as ComAtprotoServerRequestAccountDelete from './types/com/atproto/server/requestAccountDelete'
import * as ComAtprotoServerRequestEmailConfirmation from './types/com/atproto/server/requestEmailConfirmation'
import * as ComAtprotoServerRequestEmailUpdate from './types/com/atproto/server/requestEmailUpdate'
import * as ComAtprotoServerRequestPasswordReset from './types/com/atproto/server/requestPasswordReset'
import * as ComAtprotoServerReserveSigningKey from './types/com/atproto/server/reserveSigningKey'
import * as ComAtprotoServerResetPassword from './types/com/atproto/server/resetPassword'
import * as ComAtprotoServerRevokeAppPassword from './types/com/atproto/server/revokeAppPassword'
import * as ComAtprotoServerUpdateEmail from './types/com/atproto/server/updateEmail'
import * as ComAtprotoSyncGetBlob from './types/com/atproto/sync/getBlob'
import * as ComAtprotoSyncGetBlocks from './types/com/atproto/sync/getBlocks'
import * as ComAtprotoSyncGetCheckout from './types/com/atproto/sync/getCheckout'
import * as ComAtprotoSyncGetHead from './types/com/atproto/sync/getHead'
import * as ComAtprotoSyncGetLatestCommit from './types/com/atproto/sync/getLatestCommit'
import * as ComAtprotoSyncGetRecord from './types/com/atproto/sync/getRecord'
import * as ComAtprotoSyncGetRepo from './types/com/atproto/sync/getRepo'
import * as ComAtprotoSyncGetRepoStatus from './types/com/atproto/sync/getRepoStatus'
import * as ComAtprotoSyncListBlobs from './types/com/atproto/sync/listBlobs'
import * as ComAtprotoSyncListRepos from './types/com/atproto/sync/listRepos'
import * as ComAtprotoSyncNotifyOfUpdate from './types/com/atproto/sync/notifyOfUpdate'
import * as ComAtprotoSyncRequestCrawl from './types/com/atproto/sync/requestCrawl'
import * as ComAtprotoSyncSubscribeRepos from './types/com/atproto/sync/subscribeRepos'
import * as ComAtprotoTempCheckSignupQueue from './types/com/atproto/temp/checkSignupQueue'
import * as ComAtprotoTempFetchLabels from './types/com/atproto/temp/fetchLabels'
import * as ComAtprotoTempRequestPhoneVerification from './types/com/atproto/temp/requestPhoneVerification'
import * as AppBskyFeedDescribeFeedGenerator from './types/app/bsky/feed/describeFeedGenerator'
import * as AppBskyFeedGetFeedSkeleton from './types/app/bsky/feed/getFeedSkeleton'
import * as AppBskyFeedSendInteractions from './types/app/bsky/feed/sendInteractions'
import * as AppBskyLabelerGetServices from './types/app/bsky/labeler/getServices'

export const COM_ATPROTO_MODERATION = {
  DefsReasonSpam: 'com.atproto.moderation.defs#reasonSpam',
  DefsReasonViolation: 'com.atproto.moderation.defs#reasonViolation',
  DefsReasonMisleading: 'com.atproto.moderation.defs#reasonMisleading',
  DefsReasonSexual: 'com.atproto.moderation.defs#reasonSexual',
  DefsReasonRude: 'com.atproto.moderation.defs#reasonRude',
  DefsReasonOther: 'com.atproto.moderation.defs#reasonOther',
  DefsReasonAppeal: 'com.atproto.moderation.defs#reasonAppeal',
}
export const APP_BSKY_FEED = {
  DefsRequestLess: 'app.bsky.feed.defs#requestLess',
  DefsRequestMore: 'app.bsky.feed.defs#requestMore',
  DefsClickthroughItem: 'app.bsky.feed.defs#clickthroughItem',
  DefsClickthroughAuthor: 'app.bsky.feed.defs#clickthroughAuthor',
  DefsClickthroughReposter: 'app.bsky.feed.defs#clickthroughReposter',
  DefsClickthroughEmbed: 'app.bsky.feed.defs#clickthroughEmbed',
  DefsInteractionSeen: 'app.bsky.feed.defs#interactionSeen',
  DefsInteractionLike: 'app.bsky.feed.defs#interactionLike',
  DefsInteractionRepost: 'app.bsky.feed.defs#interactionRepost',
  DefsInteractionReply: 'app.bsky.feed.defs#interactionReply',
  DefsInteractionQuote: 'app.bsky.feed.defs#interactionQuote',
  DefsInteractionShare: 'app.bsky.feed.defs#interactionShare',
}
export const APP_BSKY_GRAPH = {
  DefsModlist: 'app.bsky.graph.defs#modlist',
  DefsCuratelist: 'app.bsky.graph.defs#curatelist',
  DefsReferencelist: 'app.bsky.graph.defs#referencelist',
}

export function createServer(options?: XrpcOptions): Server {
  return new Server(options)
}

export class Server {
  xrpc: XrpcServer
  com: ComNS
  app: AppNS
  club: ClubNS

  constructor(options?: XrpcOptions) {
    this.xrpc = createXrpcServer(schemas, options)
    this.com = new ComNS(this)
    this.app = new AppNS(this)
    this.club = new ClubNS(this)
  }
}

export class ComNS {
  _server: Server
  atproto: ComAtprotoNS

  constructor(server: Server) {
    this._server = server
    this.atproto = new ComAtprotoNS(server)
  }
}

export class ComAtprotoNS {
  _server: Server
  admin: ComAtprotoAdminNS
  identity: ComAtprotoIdentityNS
  label: ComAtprotoLabelNS
  moderation: ComAtprotoModerationNS
  repo: ComAtprotoRepoNS
  server: ComAtprotoServerNS
  sync: ComAtprotoSyncNS
  temp: ComAtprotoTempNS

  constructor(server: Server) {
    this._server = server
    this.admin = new ComAtprotoAdminNS(server)
    this.identity = new ComAtprotoIdentityNS(server)
    this.label = new ComAtprotoLabelNS(server)
    this.moderation = new ComAtprotoModerationNS(server)
    this.repo = new ComAtprotoRepoNS(server)
    this.server = new ComAtprotoServerNS(server)
    this.sync = new ComAtprotoSyncNS(server)
    this.temp = new ComAtprotoTempNS(server)
  }
}

export class ComAtprotoAdminNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  deleteAccount<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminDeleteAccount.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminDeleteAccount.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.deleteAccount' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  disableAccountInvites<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminDisableAccountInvites.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminDisableAccountInvites.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.disableAccountInvites' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  disableInviteCodes<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminDisableInviteCodes.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminDisableInviteCodes.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.disableInviteCodes' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  enableAccountInvites<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminEnableAccountInvites.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminEnableAccountInvites.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.enableAccountInvites' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getAccountInfo<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminGetAccountInfo.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminGetAccountInfo.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.getAccountInfo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getAccountInfos<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminGetAccountInfos.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminGetAccountInfos.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.getAccountInfos' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getInviteCodes<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminGetInviteCodes.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminGetInviteCodes.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.getInviteCodes' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSubjectStatus<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminGetSubjectStatus.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminGetSubjectStatus.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.getSubjectStatus' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  searchAccounts<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminSearchAccounts.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminSearchAccounts.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.searchAccounts' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  sendEmail<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminSendEmail.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminSendEmail.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.sendEmail' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateAccountEmail<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminUpdateAccountEmail.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminUpdateAccountEmail.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.updateAccountEmail' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateAccountHandle<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminUpdateAccountHandle.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminUpdateAccountHandle.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.updateAccountHandle' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateAccountPassword<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminUpdateAccountPassword.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminUpdateAccountPassword.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.updateAccountPassword' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateSubjectStatus<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoAdminUpdateSubjectStatus.Handler<ExtractAuth<AV>>,
      ComAtprotoAdminUpdateSubjectStatus.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.admin.updateSubjectStatus' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class ComAtprotoIdentityNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  getRecommendedDidCredentials<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoIdentityGetRecommendedDidCredentials.Handler<ExtractAuth<AV>>,
      ComAtprotoIdentityGetRecommendedDidCredentials.HandlerReqCtx<
        ExtractAuth<AV>
      >
    >,
  ) {
    const nsid = 'com.atproto.identity.getRecommendedDidCredentials' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestPlcOperationSignature<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoIdentityRequestPlcOperationSignature.Handler<ExtractAuth<AV>>,
      ComAtprotoIdentityRequestPlcOperationSignature.HandlerReqCtx<
        ExtractAuth<AV>
      >
    >,
  ) {
    const nsid = 'com.atproto.identity.requestPlcOperationSignature' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  resolveHandle<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoIdentityResolveHandle.Handler<ExtractAuth<AV>>,
      ComAtprotoIdentityResolveHandle.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.identity.resolveHandle' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  signPlcOperation<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoIdentitySignPlcOperation.Handler<ExtractAuth<AV>>,
      ComAtprotoIdentitySignPlcOperation.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.identity.signPlcOperation' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  submitPlcOperation<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoIdentitySubmitPlcOperation.Handler<ExtractAuth<AV>>,
      ComAtprotoIdentitySubmitPlcOperation.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.identity.submitPlcOperation' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateHandle<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoIdentityUpdateHandle.Handler<ExtractAuth<AV>>,
      ComAtprotoIdentityUpdateHandle.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.identity.updateHandle' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class ComAtprotoLabelNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  queryLabels<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoLabelQueryLabels.Handler<ExtractAuth<AV>>,
      ComAtprotoLabelQueryLabels.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.label.queryLabels' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  subscribeLabels<AV extends StreamAuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoLabelSubscribeLabels.Handler<ExtractAuth<AV>>,
      ComAtprotoLabelSubscribeLabels.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.label.subscribeLabels' // @ts-ignore
    return this._server.xrpc.streamMethod(nsid, cfg)
  }
}

export class ComAtprotoModerationNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  createReport<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoModerationCreateReport.Handler<ExtractAuth<AV>>,
      ComAtprotoModerationCreateReport.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.moderation.createReport' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class ComAtprotoRepoNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  applyWrites<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoRepoApplyWrites.Handler<ExtractAuth<AV>>,
      ComAtprotoRepoApplyWrites.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.repo.applyWrites' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createRecord<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoRepoCreateRecord.Handler<ExtractAuth<AV>>,
      ComAtprotoRepoCreateRecord.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.repo.createRecord' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  deleteRecord<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoRepoDeleteRecord.Handler<ExtractAuth<AV>>,
      ComAtprotoRepoDeleteRecord.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.repo.deleteRecord' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  describeRepo<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoRepoDescribeRepo.Handler<ExtractAuth<AV>>,
      ComAtprotoRepoDescribeRepo.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.repo.describeRepo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getRecord<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoRepoGetRecord.Handler<ExtractAuth<AV>>,
      ComAtprotoRepoGetRecord.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.repo.getRecord' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  importRepo<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoRepoImportRepo.Handler<ExtractAuth<AV>>,
      ComAtprotoRepoImportRepo.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.repo.importRepo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listMissingBlobs<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoRepoListMissingBlobs.Handler<ExtractAuth<AV>>,
      ComAtprotoRepoListMissingBlobs.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.repo.listMissingBlobs' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listRecords<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoRepoListRecords.Handler<ExtractAuth<AV>>,
      ComAtprotoRepoListRecords.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.repo.listRecords' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  putRecord<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoRepoPutRecord.Handler<ExtractAuth<AV>>,
      ComAtprotoRepoPutRecord.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.repo.putRecord' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  uploadBlob<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoRepoUploadBlob.Handler<ExtractAuth<AV>>,
      ComAtprotoRepoUploadBlob.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.repo.uploadBlob' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class ComAtprotoServerNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  activateAccount<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerActivateAccount.Handler<ExtractAuth<AV>>,
      ComAtprotoServerActivateAccount.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.activateAccount' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  checkAccountStatus<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerCheckAccountStatus.Handler<ExtractAuth<AV>>,
      ComAtprotoServerCheckAccountStatus.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.checkAccountStatus' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  confirmEmail<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerConfirmEmail.Handler<ExtractAuth<AV>>,
      ComAtprotoServerConfirmEmail.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.confirmEmail' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createAccount<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerCreateAccount.Handler<ExtractAuth<AV>>,
      ComAtprotoServerCreateAccount.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.createAccount' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createAppPassword<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerCreateAppPassword.Handler<ExtractAuth<AV>>,
      ComAtprotoServerCreateAppPassword.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.createAppPassword' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createInviteCode<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerCreateInviteCode.Handler<ExtractAuth<AV>>,
      ComAtprotoServerCreateInviteCode.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.createInviteCode' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createInviteCodes<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerCreateInviteCodes.Handler<ExtractAuth<AV>>,
      ComAtprotoServerCreateInviteCodes.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.createInviteCodes' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createSession<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerCreateSession.Handler<ExtractAuth<AV>>,
      ComAtprotoServerCreateSession.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.createSession' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  deactivateAccount<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerDeactivateAccount.Handler<ExtractAuth<AV>>,
      ComAtprotoServerDeactivateAccount.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.deactivateAccount' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  deleteAccount<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerDeleteAccount.Handler<ExtractAuth<AV>>,
      ComAtprotoServerDeleteAccount.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.deleteAccount' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  deleteSession<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerDeleteSession.Handler<ExtractAuth<AV>>,
      ComAtprotoServerDeleteSession.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.deleteSession' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  describeServer<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerDescribeServer.Handler<ExtractAuth<AV>>,
      ComAtprotoServerDescribeServer.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.describeServer' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getAccountInviteCodes<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerGetAccountInviteCodes.Handler<ExtractAuth<AV>>,
      ComAtprotoServerGetAccountInviteCodes.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.getAccountInviteCodes' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getServiceAuth<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerGetServiceAuth.Handler<ExtractAuth<AV>>,
      ComAtprotoServerGetServiceAuth.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.getServiceAuth' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSession<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerGetSession.Handler<ExtractAuth<AV>>,
      ComAtprotoServerGetSession.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.getSession' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listAppPasswords<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerListAppPasswords.Handler<ExtractAuth<AV>>,
      ComAtprotoServerListAppPasswords.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.listAppPasswords' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  refreshSession<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerRefreshSession.Handler<ExtractAuth<AV>>,
      ComAtprotoServerRefreshSession.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.refreshSession' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestAccountDelete<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerRequestAccountDelete.Handler<ExtractAuth<AV>>,
      ComAtprotoServerRequestAccountDelete.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.requestAccountDelete' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestEmailConfirmation<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerRequestEmailConfirmation.Handler<ExtractAuth<AV>>,
      ComAtprotoServerRequestEmailConfirmation.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.requestEmailConfirmation' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestEmailUpdate<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerRequestEmailUpdate.Handler<ExtractAuth<AV>>,
      ComAtprotoServerRequestEmailUpdate.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.requestEmailUpdate' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestPasswordReset<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerRequestPasswordReset.Handler<ExtractAuth<AV>>,
      ComAtprotoServerRequestPasswordReset.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.requestPasswordReset' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  reserveSigningKey<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerReserveSigningKey.Handler<ExtractAuth<AV>>,
      ComAtprotoServerReserveSigningKey.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.reserveSigningKey' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  resetPassword<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerResetPassword.Handler<ExtractAuth<AV>>,
      ComAtprotoServerResetPassword.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.resetPassword' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  revokeAppPassword<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerRevokeAppPassword.Handler<ExtractAuth<AV>>,
      ComAtprotoServerRevokeAppPassword.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.revokeAppPassword' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateEmail<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoServerUpdateEmail.Handler<ExtractAuth<AV>>,
      ComAtprotoServerUpdateEmail.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.server.updateEmail' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class ComAtprotoSyncNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  getBlob<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoSyncGetBlob.Handler<ExtractAuth<AV>>,
      ComAtprotoSyncGetBlob.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.sync.getBlob' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getBlocks<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoSyncGetBlocks.Handler<ExtractAuth<AV>>,
      ComAtprotoSyncGetBlocks.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.sync.getBlocks' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getCheckout<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoSyncGetCheckout.Handler<ExtractAuth<AV>>,
      ComAtprotoSyncGetCheckout.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.sync.getCheckout' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getHead<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoSyncGetHead.Handler<ExtractAuth<AV>>,
      ComAtprotoSyncGetHead.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.sync.getHead' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getLatestCommit<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoSyncGetLatestCommit.Handler<ExtractAuth<AV>>,
      ComAtprotoSyncGetLatestCommit.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.sync.getLatestCommit' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getRecord<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoSyncGetRecord.Handler<ExtractAuth<AV>>,
      ComAtprotoSyncGetRecord.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.sync.getRecord' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getRepo<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoSyncGetRepo.Handler<ExtractAuth<AV>>,
      ComAtprotoSyncGetRepo.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.sync.getRepo' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getRepoStatus<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoSyncGetRepoStatus.Handler<ExtractAuth<AV>>,
      ComAtprotoSyncGetRepoStatus.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.sync.getRepoStatus' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listBlobs<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoSyncListBlobs.Handler<ExtractAuth<AV>>,
      ComAtprotoSyncListBlobs.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.sync.listBlobs' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listRepos<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoSyncListRepos.Handler<ExtractAuth<AV>>,
      ComAtprotoSyncListRepos.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.sync.listRepos' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  notifyOfUpdate<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoSyncNotifyOfUpdate.Handler<ExtractAuth<AV>>,
      ComAtprotoSyncNotifyOfUpdate.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.sync.notifyOfUpdate' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestCrawl<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoSyncRequestCrawl.Handler<ExtractAuth<AV>>,
      ComAtprotoSyncRequestCrawl.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.sync.requestCrawl' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  subscribeRepos<AV extends StreamAuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoSyncSubscribeRepos.Handler<ExtractAuth<AV>>,
      ComAtprotoSyncSubscribeRepos.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.sync.subscribeRepos' // @ts-ignore
    return this._server.xrpc.streamMethod(nsid, cfg)
  }
}

export class ComAtprotoTempNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  checkSignupQueue<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoTempCheckSignupQueue.Handler<ExtractAuth<AV>>,
      ComAtprotoTempCheckSignupQueue.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.temp.checkSignupQueue' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  fetchLabels<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoTempFetchLabels.Handler<ExtractAuth<AV>>,
      ComAtprotoTempFetchLabels.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.temp.fetchLabels' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  requestPhoneVerification<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      ComAtprotoTempRequestPhoneVerification.Handler<ExtractAuth<AV>>,
      ComAtprotoTempRequestPhoneVerification.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'com.atproto.temp.requestPhoneVerification' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class AppNS {
  _server: Server
  bsky: AppBskyNS

  constructor(server: Server) {
    this._server = server
    this.bsky = new AppBskyNS(server)
  }
}

export class AppBskyNS {
  _server: Server
  actor: AppBskyActorNS
  embed: AppBskyEmbedNS
  feed: AppBskyFeedNS
  graph: AppBskyGraphNS
  labeler: AppBskyLabelerNS
  richtext: AppBskyRichtextNS

  constructor(server: Server) {
    this._server = server
    this.actor = new AppBskyActorNS(server)
    this.embed = new AppBskyEmbedNS(server)
    this.feed = new AppBskyFeedNS(server)
    this.graph = new AppBskyGraphNS(server)
    this.labeler = new AppBskyLabelerNS(server)
    this.richtext = new AppBskyRichtextNS(server)
  }
}

export class AppBskyActorNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }
}

export class AppBskyEmbedNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }
}

export class AppBskyFeedNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  describeFeedGenerator<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      AppBskyFeedDescribeFeedGenerator.Handler<ExtractAuth<AV>>,
      AppBskyFeedDescribeFeedGenerator.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'app.bsky.feed.describeFeedGenerator' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getFeedSkeleton<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      AppBskyFeedGetFeedSkeleton.Handler<ExtractAuth<AV>>,
      AppBskyFeedGetFeedSkeleton.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'app.bsky.feed.getFeedSkeleton' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  sendInteractions<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      AppBskyFeedSendInteractions.Handler<ExtractAuth<AV>>,
      AppBskyFeedSendInteractions.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'app.bsky.feed.sendInteractions' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class AppBskyGraphNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }
}

export class AppBskyLabelerNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  getServices<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      AppBskyLabelerGetServices.Handler<ExtractAuth<AV>>,
      AppBskyLabelerGetServices.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'app.bsky.labeler.getServices' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

export class AppBskyRichtextNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }
}

export class ClubNS {
  _server: Server
  feeed: ClubFeeedNS

  constructor(server: Server) {
    this._server = server
    this.feeed = new ClubFeeedNS(server)
  }
}

export class ClubFeeedNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }
}

type SharedRateLimitOpts<T> = {
  name: string
  calcKey?: (ctx: T) => string
  calcPoints?: (ctx: T) => number
}
type RouteRateLimitOpts<T> = {
  durationMs: number
  points: number
  calcKey?: (ctx: T) => string
  calcPoints?: (ctx: T) => number
}
type HandlerOpts = { blobLimit?: number }
type HandlerRateLimitOpts<T> = SharedRateLimitOpts<T> | RouteRateLimitOpts<T>
type ConfigOf<Auth, Handler, ReqCtx> =
  | Handler
  | {
      auth?: Auth
      opts?: HandlerOpts
      rateLimit?: HandlerRateLimitOpts<ReqCtx> | HandlerRateLimitOpts<ReqCtx>[]
      handler: Handler
    }
type ExtractAuth<AV extends AuthVerifier | StreamAuthVerifier> = Extract<
  Awaited<ReturnType<AV>>,
  { credentials: unknown }
>
