import { Button, Icon } from '@/shared/components';

export default function Home() {
  return (
    <div style={{ height: '2000px' }}>
      <Button
        size="large"
        endIcon={<Icon iconName="gitLogo" />}
        variant="outlined"
      >
        Repo
      </Button>
    </div>
  );
}
