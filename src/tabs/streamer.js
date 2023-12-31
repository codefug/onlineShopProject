import { clearContent } from "../functions/clear";
import streamer1 from "../assets/streamerImage/kmk.jpeg";
import streamer2 from "../assets/streamerImage/oking.jpeg";
import { additem } from "../functions/item";

function streamerfunction() {
    const content = document.querySelector("#content");
    const streamer = [["오킹", "오병민, 동복 오씨 정무공파 17대손", `토크와 야외방송을 주력으로 게임컨텐츠를 진행하는 방송.
    합방과 국토대장정을 계기로 많은 시청자들의 주목을 받기 시작했는데 트수들도 처음엔 걸어다니며 국토대장정을 하는 오킹에게 관심을 주면서 주목을 했던 정도였으나 이후 여러가지 신선한 컨텐츠들과 인기있는 스트리머들과의 합방으로 진국을 발견한 케이스이다.
    말빨은 상당히 타고났던것으로 보이며, 가족의 영향으로 개그감도 좋다. 이재정 경기도 교육감에게 블러드트레일을 시키고 세계적인 게임대회에서 덤블링으로 등장할 정도로 관종끼를 소유하고 있으며 망가지는것도 마다하지 않는 편. 이 때문에 6월 국토대장정을 기점으로 남녀 가리지 않고 스트리머들과 야방 합방을 자주 하며, 함께 아버지 소유의 토지에서 놀기, 함께 낚시하기, 함께 한강가기 컨텐츠 등 다양한 컨텐츠을 많이 진행하고 있다.
    또한 여러가지 게임 방송도 진행하는데 주력으로 배틀그라운드를 플레이하고 게임대회 덕분에 리그 오브 레전드나 포트나이트, 오버워치도 플레이하며 여러가지 다양한 게임을 켠왕하기도 한다. 그리고 러스트 합방이나 24시간 켠왕, 빅맥빵내기, 자낳대 등을 통해 시청자들을 유입시켰다.`],
     ["김민교", "김민교 (Kim Min-kyo)", `고3 시절 체대에 진학하기 위한 준비를 했으나 실기시험에서 탈락하고 추가모집으로 모 대학교에 입학했으나 실기시험에 대한 아쉬움에 자퇴를 하게 된다. 이후 재수생활을 거쳐 공대에 진학하게 되지만, 휴학 후 의무경찰로 군입대를 한 후 전역했다. 이후 학교에 대한 미련이 없어 경찰공무원을 준비하던 시절에 간간히 롤을 몇 판씩 하면서 학창시절 GE, KOOTV 때에 즐겨봤던 이상호를 보게되었다.
     어느 날 이상호가 디스코드로 자신의 게임에 대한 피드백을 받는 "진실의 방" 이라는 컨텐츠를 진행 중이었고, 이때 김민교가 디스코드에 참여해서 재치있는 입담으로 이상호한테 팩폭을 선사, 이로 인해 시청자들에 호응을 얻기 시작했고 시청자들에게 이름이 각인되었다. 그 후 종종 이상호와 디스코드를 하던 중 같이 합방까지 하게 되고, 이상호의 권유로 멸망전에 같이 출전하여 BJ에 입문하게 된다.
     이상호와의 "진실의 방" 컨텐츠를 하기 전에도 BJ김학도로 아프리카TV 방송을 300시간가량했으나 시청자가 안들어와서 접었다고 한다. BJ김학도로 방송하는 와중에 이름을 알리기 위해 감컴퍼니 오디션에 지원했으나 읽씹컷을 당했다.
     경제적 지원빼고 할 수 있는 모든 지원을 다 해주겠다는 이상호의 BJ권유로 닉네임을 김민교로 다시 시작한 후에도 방송에 대한 확신이 없어 "어차피 다음 시험(경찰공무원)때까지 시간이있으니 그때까지 몇 개월만 잠시하자"라고 생각하며 여자친구에게도 알리지 않다가 방송이 잘 풀려 계속하게 되었다고 한다. 이러한 이상호의 적극적인 푸쉬 및 자신의 입담을 통해, 방송인으로서 굉장히 빠른 시간 내에 성장한 드문 케이스가 되었다.
     여담으로 "진실의 방" 컨텐츠로 시청자들의 호응이 좋은 것을 본인도 알게 되어 컨텐츠마다 디스코드 경쟁을 뚫으려고 광클을 하였다고 한다.`]];
    const imageList = [streamer2, streamer1];
    clearContent();

    imageList.forEach((element, index) => {
        additem(content, element,
            streamer[index][0], streamer[index][1], streamer[index][2], "streamer")
    });
    
    content.classList.add('streamer');
}
export { streamerfunction };