const gulp = require('gulp');
const path = require('path');
const fs = require('fs-extra');

const TEMPLATE_DIR = 'lib/assets';

// テンプレートファイルを展開するタスク
gulp.task('setup', async function () {
  // プロジェクトのルートディレクトリのパスを取得する
  const projectDir = process.env.INIT_CWD;

  // パッケージのルートディレクトリのパスを取得する
  const packageDir = path.dirname(require.resolve('@k2works/intercept-booster-2'));

  // テンプレートファイルが含まれるディレクトリのパスを取得する
  const templateDir = path.join(packageDir, TEMPLATE_DIR);

  // テンプレートファイルをプロジェクトのルートディレクトリにコピーする
  await fs.copy(templateDir, `${projectDir}`, { overwrite: true });

  // セットアップ処理を実行する
  runSetup();
});

// セットアップ処理を実行する関数
function runSetup() {
  // セットアップ処理を実装する
}

// デフォルトタスク
gulp.task('default', gulp.series('setup'));
