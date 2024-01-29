import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Container from "@/components/Container";

export default function Home() {
  return <>
    <Container  >
      <Heading level={1} content={"Zadanie podsumowujące – podstawy React.js"} />
      <Paragraph content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tristique augue, vel suscipit nulla scelerisque nec. Vestibulum bibendum, metus ac sodales tristique, mauris lacus consectetur dui, a eleifend nunc odio vel orci. Nullam ac sapien nec purus ultrices luctus. Proin consectetur metus eget tellus dignissim facilisis. Ut auctor urna nec efficitur bibendum. Duis nec risus id velit cursus pulvinar. Curabitur id nulla sit amet felis malesuada posuere. Vivamus vel turpis ac lectus tincidunt varius. Aliquam erat volutpat. Vivamus vel est ut nisi suscipit dignissim vel id tortor.\n" +
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis eleifend, eros eu efficitur venenatis, sem nisi rhoncus sem, ut elementum elit turpis id quam. Curabitur cursus, libero ut volutpat tincidunt, mi risus efficitur neque, vel tincidunt justo dolor nec justo. Aliquam erat volutpat. Quisque sit amet mi nec turpis ultricies blandit. Integer euismod, risus ut venenatis ullamcorper, elit turpis sodales nisl, vel aliquam velit metus vel sem. Sed in interdum lacus, ut lacinia ligula. Nunc vestibulum ante nec quam congue, a ultricies augue vulputate. Fusce eu urna nec ligula consectetur vestibulum.\n" +
          "Integer eu ipsum at felis scelerisque posuere ac eu justo. In hac habitasse platea dictumst. Maecenas vitae dolor eu mauris tincidunt vehicula. Proin tincidunt, risus vitae vehicula consectetur, elit mi dictum ligula, eu efficitur quam nunc sit amet libero. Maecenas sit amet dictum mi. Curabitur sodales elit id erat congue euismod. Ut tincidunt ligula vel nunc rhoncus, non bibendum velit volutpat. Vestibulum eget dolor ac mi ultricies tincidunt nec vel justo. Duis tristique vulputate lacus, id auctor enim tempor vel.\n"} />
      <Heading content={"Dowolna"} />
      <Paragraph content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tristique augue, vel suscipit nulla scelerisque nec. Vestibulum bibendum, metus ac sodales tristique, mauris lacus consectetur dui, a eleifend nunc odio vel orci. Nullam ac sapien nec purus ultrices luctus. Proin consectetur metus eget tellus dignissim facilisis. Ut auctor urna nec efficitur bibendum. Duis nec risus id velit cursus pulvinar.\n" +
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis eleifend, eros eu efficitur venenatis, sem nisi rhoncus sem, ut elementum elit turpis id quam. Curabitur cursus, libero ut volutpat tincidunt, mi risus efficitur neque, vel tincidunt justo dolor nec justo. Aliquam erat volutpat. Quisque sit amet mi nec turpis ultricies blandit. Integer euismod, risus ut venenatis ullamcorper, elit turpis sodales nisl, vel aliquam velit metus vel sem. Sed in interdum lacus, ut lacinia ligula.\n"} />
    </Container>
  </>
}