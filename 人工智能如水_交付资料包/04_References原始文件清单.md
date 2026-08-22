# 04｜References 原始文件清单

本文件是交付资料包中说明文档的**离线溯源索引**。下表中的链接全部使用相对路径，解压 ZIP 后可在本地直接打开。对于公开网页链接等未保存离线快照的外部资源，本表不会伪装为原始副本，而是单列说明其缺失状态与替代文件。

## 说明文档的离线 References

| 说明文档 | 引用编号 | 离线原始文件/副本 | 说明 |
|---|---:|---|---|
| [00_导出说明.md](00_导出说明.md) | [1] | [source/original-docs/ideas.md](source/original-docs/ideas.md) | 原始设计构思文件副本。 |
|  | [2] | [source/design-docs/modes-design-spec.md](source/design-docs/modes-design-spec.md) | 模式设计规格原始导出副本。 |
|  | [3] | [source/prompt-records/01_生图提示词原始导出.md](source/prompt-records/01_生图提示词原始导出.md) | 原始提示词导出副本。 |
|  | [4] | [source/chat-records/项目过程整理记录_非完整逐字聊天记录.md](source/chat-records/项目过程整理记录_非完整逐字聊天记录.md) | 已整理过程记录，不是完整逐字聊天记录。 |
| [01_提示词与素材清单.md](01_提示词与素材清单.md) | [1] | [source/prompt-records/01_生图提示词原始导出.md](source/prompt-records/01_生图提示词原始导出.md) | 包含 4 条可追溯原始生图提示词。 |
|  | [2] | [source-code/client/src/pages/Home.tsx](source-code/client/src/pages/Home.tsx) | 页面现有素材 URL 引用的代码证据。 |
|  | [3] | [source/materials/SHA256SUMS.txt](source/materials/SHA256SUMS.txt) | 关键文件校验值。 |
| [02_设计思路与信息架构.md](02_设计思路与信息架构.md) | [1] | [source/original-docs/ideas.md](source/original-docs/ideas.md) | 原始设计构思。 |
|  | [2] | [source/references/01_OpenAI参考页面链接记录.md](source/references/01_OpenAI参考页面链接记录.md) | 外部参考页链接记录；非离线网页镜像。 |
|  | [3] | [source/design-docs/modes-design-spec.md](source/design-docs/modes-design-spec.md) | 模式及图片插入逻辑的既有设计规格。 |
|  | [4] | [source/original-input/reference-screenshots/用户参考截图_OpenAI布局.webp](source/original-input/reference-screenshots/用户参考截图_OpenAI布局.webp) | 用户提供的参考布局截图原件。 |
|  | [5] | [source/original-input/reference-screenshots/用户参考截图_大屏效果.webp](source/original-input/reference-screenshots/用户参考截图_大屏效果.webp) | 用户提供的大屏效果截图原件。 |
| [03_项目结构地图.md](03_项目结构地图.md) | [1] | [source-code/client/src/App.tsx](source-code/client/src/App.tsx) | 当前应用路由与容器。 |
|  | [2] | [source-code/config/package.json](source-code/config/package.json) | 当前依赖和命令配置。 |
|  | [3] | [source-code/client/src/pages/Home.tsx](source-code/client/src/pages/Home.tsx) | 当前核心页面实现。 |
|  | [4] | [source-code/client/src/index.css](source-code/client/src/index.css) | 当前全局样式实现。 |
| [05_完整迭代过程图说明.md](05_完整迭代过程图说明.md) | [1] | [source/chat-records/项目过程整理记录_非完整逐字聊天记录.md](source/chat-records/项目过程整理记录_非完整逐字聊天记录.md) | 迭代节点的项目过程依据；非完整逐字聊天记录。 |
|  | [2] | [source/original-docs/todo.md](source/original-docs/todo.md) | 已完成任务清单副本。 |
|  | [3] | [source/original-docs/ideas.md](source/original-docs/ideas.md) | 原始设计构思。 |
|  | [4] | [03_项目结构地图.md](03_项目结构地图.md) | 页面、文件与依赖结构说明。 |

## 未保存离线原文的外部资源

| 外部资源 | 状态 | 原因与替代方案 |
|---|---|---|
| OpenAI Harness Engineering 参考页面 | 未保存完整离线网页副本 | 任务中主要以视觉参考方式浏览，当前资料中无可合法离线归档的完整正文/HTML；请通过 [链接记录](source/references/01_OpenAI参考页面链接记录.md) 访问原站，离线时使用用户参考截图和设计文档。 |
| Google Fonts CDN | 未保存字体文件副本 | 项目仅引用 Google Fonts URL。离线部署时，可在合规前提下自行下载字体文件并更新 `index.html`。 |

## References

[1]: [OpenAI 参考页面链接记录](source/references/01_OpenAI参考页面链接记录.md)
[2]: [原始演讲稿 PDF 的兼容副本](source/original-input/演讲稿_1.pdf)
[3]: [当前任务清单副本](source/original-docs/todo.md)
