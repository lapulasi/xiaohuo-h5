import { UserCommonModule } from './user-common.module';

describe('UserCommonModule', () => {
  let userCommonModule: UserCommonModule;

  beforeEach(() => {
    userCommonModule = new UserCommonModule();
  });

  it('should create an instance', () => {
    expect(userCommonModule).toBeTruthy();
  });
});
