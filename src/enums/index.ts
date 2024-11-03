/**
 * @description: 响应码
 */
export enum RESPONSE_CODE {
  NOSUCCESS = -1, // 表示请求成功，但操作未成功
  SUCCESS = 200, // 请求成功
  BAD_REQUEST = 400, // 请求错误
  UNAUTHORIZED = 401, // 未授权
  FORBIDDEN = 403, // 禁止访问
  NOT_FOUND = 404, // 资源未找到
  INTERNAL_SERVER_ERROR = 500, // 服务器错误
}

/**
 * @description: 请求提示语
 */
export enum RESPONSE_MSG {
  SUCCESS = '请求成功',
  FAILURE = '请求失败',
  ERROR = '服务器错误',
}

/**
 * @description: 国际化语言
 */
export enum LOCALES {
  zhCN = 'zh-CN', // 中文
  enUS = 'en-US', // 英文
  jaJP = 'ja-JP', // 日文
  zhTW = 'zh-TW', // 繁体中文
}

/**
 * @description: 服务器推送事件
 */
export enum EVENTBUS_TYPE {
  MESSAGE_CREATE = 'message_create', // 消息创建
}


/**
 * 缓存的key 枚举
 */
export enum CacheEnum {
  /**
   * 登录用户 redis key
   */
  LOGIN_TOKEN_KEY = 'login_tokens:',

  /**
   * 验证码 redis key
   */
  CAPTCHA_CODE_KEY = 'captcha_codes:',

  /**
   * 参数管理 cache key
   */
  SYS_CONFIG_KEY = 'sys_config:',

  /**
   * 字典管理 cache key
   */
  SYS_DICT_KEY = 'sys_dict:',

  /**
   * 防重提交 redis key
   */
  REPEAT_SUBMIT_KEY = 'repeat_submit:',

  /**
   * 限流 redis key
   */
  RATE_LIMIT_KEY = 'rate_limit:',

  /**
   * 登录账户密码错误次数 redis key
   */
  PWD_ERR_CNT_KEY = 'pwd_err_cnt:',

  /**
   * 登录账户密码错误次数 redis key
   */
  GZ_TYPE = 'gz_type:',
  /**
   * 微信code存储
   */
  MA_CODE = 'ma_code:',
}

/**
 * 数据过滤规则枚举
 */
export enum DataScopeEnum {
  /**
   * 全部数据权限
   */
  DATA_SCOPE_ALL = '1',

  /**
   * 自定数据权限
   */
  DATA_SCOPE_CUSTOM = '2',

  /**
   * 部门数据权限
   */
  DATA_SCOPE_DEPT = '3',

  /**
   * 部门及以下数据权限
   */
  DATA_SCOPE_DEPT_AND_CHILD = '4',

  /**
   * 仅本人数据权限
   */
  DATA_SCOPE_SELF = '5',
}

/**
 * 删除标志:0代表存在 1代表删除
 */
export enum DelFlagEnum {
  /**
   * 存在
   */
  NORMAL = '0',
  /**
   * 删除
   */
  DELETE = '1',
}

/**
 * 数据状态:0正常,1停用
 */
export enum StatusEnum {
  /**
   * 正常
   */
  NORMAL = '0',
  /**
   * 停用
   */
  STOP = '1',
}

/**
 * 性别:0男,1女
 */
export enum SexEnum {
  /**
   * 男
   */
  MAN = '0',
  /**
   * 女
   */
  WOMAN = '1',
}
