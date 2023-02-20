import '/imports/infrastructure/migrations';

const migrate = () => {
    Migrations.migrateTo('latest');
};

export default migrate;
