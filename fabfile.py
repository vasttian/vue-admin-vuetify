# -*- coding: utf-8 -*-

from fabric.api import hosts
from fabric.context_managers import cd
from fabric.operations import local, put, run


def deploy(build, project_root):
    if build == 'prod':
        local('npm run build')
    elif build == 'staging':
        local('npm run build-staging')
    else:
        print("Please deploy in specific mode like staging or production.")
        return

    with cd(project_root):
        run('mkdir deploy', quiet=True)
        put('dist', 'deploy')
        run('rm -rf dist_bak')
        run('mv dist dist_bak', quiet=True)
        run('rm -rf dist')
        run('mv deploy/dist dist')
        run('rm -rf deploy')


@hosts('root@67.218.155.176:29179')
def deploy_prod(build='prod'):
    """部署到生产环境

    # 发布前编译
    fab deploy_prod:build=prod
    fab deploy_prod:prod
    fab deploy_prod

    # 不编译
    fab deploy_prod:build=no
    fab deploy_prod:no
    """
    project_root = '/data/www/vue-admin-vuetify/'
    deploy(build, project_root)


@hosts('root@67.218.176.117:29179')
def deploy_staging(build='staging'):
    """部署到 staging 环境

    # 发布前编译
    fab deploy_staging:build=staging
    fab deploy_staging:staging
    fab deploy_staging

    # 不编译
    fab deploy_staging:build=no
    fab deploy_staging:no
    """
    project_root = '/data/www/vue-admin-vuetify/'
    deploy(build, project_root)
